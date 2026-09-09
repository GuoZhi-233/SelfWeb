import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { build } from 'esbuild';
import postcss from 'postcss';
import { renderToStaticMarkup } from 'react-dom/server';

await mkdir('.cache', { recursive: true });
for (const name of ['MediaVolume', 'PageTransition']) {
  await build({ entryPoints: [`components/${name}.ts${name === 'PageTransition' ? 'x' : ''}`],
    bundle: true, platform: 'node', format: 'esm', packages: 'external', outfile: `.cache/${name}.mjs` });
}
const { default: MediaVolume } = await import('../.cache/MediaVolume.mjs');
const { default: PageTransition } = await import('../.cache/PageTransition.mjs');

// Reproduce iOS: writing media.volume has no effect. The gain must still change.
let contexts = 0, sources = 0, resumes = 0, level;
class FakeContext {
  currentTime = 1;
  destination = {};
  constructor() { contexts++; }
  createGain() { return { connect() {}, disconnect() {}, gain: {
    cancelScheduledValues() {},
    setValueAtTime(v) { level = v; }, setTargetAtTime(v) { level = v; },
  } }; }
  createMediaElementSource() { sources++; return { connect() {}, disconnect() {} }; }
  async resume() { resumes++; }
  async close() {}
}
globalThis.window = { AudioContext: FakeContext };
const audio = { get volume() { return 1; }, set volume(_) {}, src: 'first.mp3' };
const control = new MediaVolume(audio, .4);
await control.resume();
assert.equal(level, .4);
control.setVolume(.15);
assert.equal(level, .15, 'Gain must work even when media.volume is read-only');
audio.src = 'second.mp3';
await control.resume();
assert.equal(level, .15, 'Changing tracks must not reset the gain');
control.setVolume(0);
assert.equal(level, 0, 'Slider zero must mute the soundtrack');
assert.equal(contexts, 1);
assert.equal(sources, 1, 'Repeated playback must reuse its media source');
assert.equal(resumes, 2, 'Playback resumes a suspended audio context');
control.dispose();

let covered = 0, finished = 0;
const transition = (phase) => PageTransition({ phase,
  onCovered() { covered++; }, onFinished() { finished++; } });
const cover = transition('cover');
assert.ok(!/PENG|ZHOU|<svg/.test(renderToStaticMarkup(cover)), 'No branding in the transition');
const panels = cover.props.children;
assert.equal(panels.length, 5);
assert.ok(panels.slice(0, -1).every(p => !p.props.onAnimationEnd), 'Early panels cannot swap the route');
const target = {};
panels.at(-1).props.onAnimationEnd({ target, currentTarget: target, animationName: 'shutter-in' });
assert.equal(covered, 1);
assert.equal(finished, 0);
transition('reveal').props.children.at(-1).props.onAnimationEnd({ target, currentTarget: target, animationName: 'shutter-out' });
assert.equal(finished, 1);

// Evaluate the actual CSS edge formulas across fractional CSS widths and DPRs.
const sheet = postcss.parse(await readFile('index.css', 'utf8'));
const rule = sheet.nodes.find(n => n.selector === '.transition-shutter');
const value = prop => rule.nodes.find(n => n.prop === prop).value;
const left = value('left').match(/var\(--i\) \* ([\d.]+)% - ([\d.]+)px/);
const width = value('width').match(/([\d.]+)% \+ ([\d.]+)px/);
assert.ok(left && width);
for (const viewport of [320, 655, 1081, 1365.33, 1536, 1920, 2560, 3440, 5120, 7680]) {
  for (const dpr of [1, 1.25, 1.5, 2, 3]) {
    const size = viewport + 4;
    let end = -Infinity;
    for (let i = 0; i < 5; i++) {
      const start = i * Number(left[1]) / 100 * size - Number(left[2]);
      const next = start + Number(width[1]) / 100 * size + Number(width[2]);
      if (i === 0) assert.ok(start <= 0);
      else assert.ok(Math.ceil(start * dpr) <= Math.floor(end * dpr), 'Shutters must overlap after pixel rounding');
      end = next;
    }
    assert.ok(end >= size);
  }
}
console.log('Interaction checks passed: iOS-style gain control, track persistence, transition completion and 50 viewport/DPR combinations.');
