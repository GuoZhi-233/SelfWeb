import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { renderToString } from 'react-dom/server';
import React from 'react';
import assert from 'node:assert/strict';
await mkdir('.cache',{recursive:true});
await build({entryPoints:['App.tsx'],bundle:true,platform:'node',format:'esm',packages:'external',define:{'import.meta.env.BASE_URL':'"/SelfWeb/"'},outfile:'.cache/app-check.mjs'});
await build({entryPoints:['src/data/projects.ts'],bundle:true,platform:'node',format:'esm',outfile:'.cache/project-check.mjs'});
const {default:App}=await import('../.cache/app-check.mjs');
const {PROJECT_DATA}=await import('../.cache/project-check.mjs');
globalThis.window={matchMedia:()=>({matches:false})};
let language='zh';
globalThis.localStorage={getItem:key=>key==='pz-language'?language:null};
const routes=['home','works','about','contact',...PROJECT_DATA.map(p=>`project/${p.id}`),'not-found'];
for(language of ['zh','en']){
 for(const route of routes){
  globalThis.location={hash:`#${route}`};
  const html=renderToString(React.createElement(App));
  assert.ok(html.includes('PENG ZHOU'),`Missing identity on ${route}`);
  assert.ok(html.includes('main-content'),`Missing main on ${route}`);
  if(route==='home'){
   assert.ok(html.includes('/SelfWeb/media/showreel.mp4'),'Showreel URL lost its Pages prefix');
   assert.ok(html.indexOf('reel-stage')<html.indexOf('project-grid'),'Projects precede the film');
  }
  if(route==='about'){
   assert.ok(!html.includes('status-label'), 'Removed internship badge returned');
   assert.ok(html.includes(language === 'zh' ? '2026年7月' : 'July 2026'));
   assert.ok(html.includes(language === 'zh' ? '一等荣誉学士' : 'First-Class'));
   assert.ok(html.includes(language === 'zh' ? '2026应届毕业生' : 'Class of 2026'));
  }
  if(route.startsWith('project/')){
   const p=PROJECT_DATA.find(p=>p.id===route.slice(8));
   if(p.common.bilibiliId)assert.ok(html.includes(p.common.bilibiliId),`Missing video link: ${p.id}`);
   assert.ok(!html.includes('Archive not found'),'Valid project is not found');
  }
 }
}
console.log(`Server rendering passed: ${routes.length*2} route/language combinations, ${PROJECT_DATA.length} original projects.`);
