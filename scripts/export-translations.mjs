/** Developer translation handoff: produces one CSV for Dutch, French and German. */
import fs from 'node:fs';
import crypto from 'node:crypto';
const catalog=JSON.parse(fs.readFileSync(new URL('../translations.catalog.json',import.meta.url),'utf8'));
const quote=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
const rows=[['ID','English','Dutch (nl)','French (fr)','German (de)','Needs translation']];
for(const [source,row] of Object.entries(catalog.entries)){
 const id=crypto.createHash('sha256').update(source).digest('hex').slice(0,16);
 rows.push([id,source,row.nl,row.fr,row.de,['nl','fr','de'].filter(lang=>!row[lang]).join(' ')]);
}
fs.writeFileSync(new URL('../TRANSLATION-HANDOFF.csv',import.meta.url),'\ufeff'+rows.map(row=>row.map(quote).join(',')).join('\r\n')+'\r\n');
console.log(`Exported ${rows.length-1} text entries to TRANSLATION-HANDOFF.csv`);
