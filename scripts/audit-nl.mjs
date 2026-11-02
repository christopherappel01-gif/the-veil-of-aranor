import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root=path.resolve(import.meta.dirname,'..');
const source=fs.readFileSync(path.join(root,'public/app.js'),'utf8');
const catalogue=JSON.parse(fs.readFileSync(path.join(root,'translations.catalog.json'),'utf8')).entries;
function objectDefinition(name){
 const start=source.indexOf('const '+name+'={');if(start<0)throw Error('Definition absent: '+name);
 const opening=source.indexOf('{',start);let depth=0,quote='',esc=false,template=0,end=-1;
 for(let i=opening;i<source.length;i++){
  const c=source[i];if(quote){if(esc){esc=false;continue}if(c==='\\'){esc=true;continue}if(c===quote)quote='';continue;}
  if(c==='\''||c==='"'||c==='`'){quote=c;continue}
  if(c==='{')depth++;if(c==='}'&&--depth===0){end=i+1;break}
 }
 if(end<0)throw Error('Definition unterminated: '+name);
 return source.slice(opening,end);
}
const scenes=vm.runInNewContext('('+objectDefinition('scenes')+')');
const fields=[];
for(const [sceneId,scene] of Object.entries(scenes)){
 for(const field of ['title','mission'])if(typeof scene[field]==='string')fields.push({sceneId,field,english:scene[field]});
 for(let i=0;i<(scene.text||[]).length;i++)fields.push({sceneId,field:`text[${i}]`,english:scene.text[i]});
 for(let i=0;i<(scene.choices||[]).length;i++)for(const [j,field] of [[1,'label'],[2,'note']])if(typeof scene.choices[i][j]==='string')fields.push({sceneId,field:`choice[${i}].${field}`,english:scene.choices[i][j]});
}
const missing=fields.filter(x=>!catalogue[x.english]?.nl?.trim());
const report={scope:'Primary statically declared scene text, titles, objectives and choices. Extra scenes appended via Object.assign and dynamic server text are not included.',scenes:Object.keys(scenes).length,fields:fields.length,translated:fields.length-missing.length,missing:missing.length,coverage_percent:+(100*(fields.length-missing.length)/fields.length).toFixed(1),missingExamples:missing.slice(0,20)};
const loc=path.join(root,'localization');
fs.writeFileSync(path.join(loc,'nl_scene_audit.json'),JSON.stringify(report,null,2)+'\n');
const csv=v=>'"'+String(v).replaceAll('"','""')+'"';
fs.writeFileSync(path.join(loc,'nl_missing_scene_text.csv'),['scene,field,english',...missing.map(x=>[x.sceneId,x.field,x.english].map(csv).join(','))].join('\n')+'\n');
console.log(JSON.stringify({scenes:report.scenes,fields:report.fields,translated:report.translated,missing:report.missing,coverage_percent:report.coverage_percent}));
if(process.argv.includes('--check')&&missing.length)process.exitCode=1;
