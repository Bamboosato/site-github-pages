import { readContent } from './content-files.mjs';
import { validateRecords } from '../src/lib/validation.ts';
const { apps, updates, errors } = readContent();
errors.push(...validateRecords(apps, updates));
if (errors.length) {
  console.error(`Content validation failed (${errors.length}):\n${errors.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Content validated: ${apps.length} app translations, ${updates.length} update translations.`);
}
