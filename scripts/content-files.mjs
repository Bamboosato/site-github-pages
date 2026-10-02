import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';
import { appSchema, updateSchema } from '../src/lib/schema.ts';

export function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  }).sort();
}

export function readContent(root = process.cwd()) {
  const errors = [];
  const collections = {};
  for (const [name, schema] of [['apps', appSchema], ['updates', updateSchema]]) {
    const directory = join(root, 'src', 'content', name);
    collections[name] = [];
    for (const file of filesUnder(directory).filter((path) => path.endsWith('.md'))) {
      const label = `${name}/${relative(directory, file).replaceAll('\\', '/')}`;
      try {
        const text = readFileSync(file, 'utf8');
        const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (!match) throw new Error('Expected YAML frontmatter and Markdown body');
        const result = schema.safeParse(parse(match[1]));
        if (!result.success) {
          for (const issue of result.error.issues) errors.push(`${label}: ${issue.path.join('.')} ${issue.message}`);
          continue;
        }
        collections[name].push({ file: relative(directory, file).replaceAll('\\', '/'), data: result.data, body: match[2] });
      } catch (error) {
        errors.push(`${label}: ${error.message}`);
      }
    }
  }
  return { ...collections, errors };
}
