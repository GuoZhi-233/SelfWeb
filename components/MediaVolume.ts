// Route the same media element through one gain node for its entire lifetime.
// This controls the web soundtrack even where HTMLMediaElement.volume is ignored.
export default class MediaVolume {
  private context: AudioContext | null = null;
  private source: MediaElementAudioSourceNode | null = null;
  private gain: GainNode | null = null;
  private volume: number;
  constructor(private audio: HTMLMediaElement, volume: number) {
    this.volume = volume;
  }
  async resume() {
    if (!this.context) {
      const Context = window.AudioContext ||
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Context) {
        this.audio.volume = this.volume;
        return Promise.resolve();
      }
      const context = new Context();
      const gain = context.createGain();
      const source = context.createMediaElementSource(this.audio);
      source.connect(gain);
      gain.connect(context.destination);
      this.context = context;
      this.source = source;
      this.gain = gain;
      this.audio.volume = 1;
      gain.gain.setValueAtTime(this.volume, context.currentTime);
    }
    return this.context.resume();
  }
  setVolume(value: number) {
    this.volume = Math.max(0, Math.min(1, value));
    if (this.context && this.gain) {
      this.audio.volume = 1;
      const param = this.gain.gain;
      param.cancelScheduledValues(this.context.currentTime);
      param.setTargetAtTime(this.volume, this.context.currentTime, .015);
    } else {
      this.audio.volume = this.volume;
    }
  }
  dispose() {
    this.source?.disconnect();
    this.gain?.disconnect();
    void this.context?.close().catch(() => {});
    this.context = null;
    this.source = null;
    this.gain = null;
  }
}
