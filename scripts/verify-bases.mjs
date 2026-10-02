import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { siteConfig } from '../src/config/site.ts';
// Build sequentially: Astro shares the content cache and output directory.
const astroPackage = new URL('../node_modules/astro/package.json', import.meta.url);
const { bin } = JSON.parse(readFileSync(astroPackage, 'utf8'));
const cli = new URL(typeof bin === 'string' ? bin : bin.astro, astroPackage);
for (const base of ['/', siteConfig.base]) {
  const env = { ...process.env, SITE_BASE: base };
  for (const args of [[fileURLToPath(cli), 'build'], ['scripts/validate-links.mjs']]) {
    const result = spawnSync(process.execPath, args, { env, stdio: 'inherit' });
    if (result.status !== 0) process.exit(result.status ?? 1);
  }
}
