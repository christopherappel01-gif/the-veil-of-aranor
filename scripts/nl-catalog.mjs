import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const args=process.argv.slice(2);
const data=JSON.parse(fs.readFileSync(path.join(root,'translations.catalog.json'),'utf8'));
const entries=data.entries;const keys=Object.keys(entries);
function parseCSV(s){const out=[];let row=[],field='',q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){field+='"';i++;}else q=!q;}else if(c===','&&!q){row.push(field);field='';}else if((c==='\n'||c==='\r')&&!q){if(c==='\r'&&s[i+1]==='\n')i++;row.push(field);field='';if(row.some(v=>v.length))out.push(row);row=[];}else field+=c;}if(field||row.length){row.push(field);out.push(row);}return out;}
const placeholders=s=>[...s.matchAll(/\$\{[^}]+\}|\{\{[^}]+\}\}|%[sd]|\{\w+\}/g)].map(x=>x[0]).sort();
if(args.includes('--import')){
 const fn=args[args.indexOf('--import')+1];if(!fn)throw Error('Provide a CSV file path after --import');
 const csv=parseCSV(fs.readFileSync(fn,'utf8').replace(/^\uFEFF/,''));let updated=0;const bad=[];
 for(const row of csv.slice(1)){const [en,nl]=row;if(!en||!nl?.trim())continue;if(!entries[en]){bad.push('Unknown source: '+en.slice(0,80));continue;}
 if(JSON.stringify(placeholders(en))!==JSON.stringify(placeholders(nl))){bad.push('Placeholder mismatch: '+en.slice(0,80));continue;}
 entries[en].nl=nl.trim();updated++;
 }
 if(bad.length){console.error(bad.slice(0,30).join('\n'));process.exit(1);}
 fs.writeFileSync(path.join(root,'translations.catalog.json'),JSON.stringify(data,null,2)+'\n');
 console.log('Imported '+updated+' Dutch translations');
}
const missing=keys.filter(k=>!entries[k].nl?.trim());const percentage=(100*(keys.length-missing.length)/keys.length).toFixed(1);
const report={total:keys.length,translated:keys.length-missing.length,missing:missing.length,coverage_percent:+percentage,missing_examples:missing.slice(0,30)};
fs.writeFileSync(path.join(root,'localization/nl_coverage_report.json'),JSON.stringify(report,null,2)+'\n');
const dict={};for(const k of keys)if(entries[k].nl)dict[k]=entries[k].nl;
const generated=path.join(root,'public/translations.generated.js');
const existing=fs.readFileSync(generated,'utf8');
const json=JSON.parse(existing.slice(existing.indexOf('=')+1).trim().replace(/;$/,''));json.nl={...json.nl,...dict};
fs.writeFileSync(generated,'// Generated Dutch catalogue by scripts/nl-catalog.mjs\nwindow.LOST_EXPEDITION_I18N='+JSON.stringify(json)+';\n');
console.log(`NL: ${report.translated}/${report.total} (${percentage}%) — ${missing.length} missing`);
if(args.includes('--check')&&missing.length)process.exitCode=1;
