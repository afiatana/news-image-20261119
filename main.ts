// news-image-20261119 — "The World Today", a one-page newspaper poster summing up
// Thursday 19 November 2026 in six stories. The program copies the image beside
// this file to /output/entry.png. Node 22, standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const entryPath = new URL('./entry.png', import.meta.url);
if (!existsSync(entryPath)) {
  throw new Error(`entry.png not found at ${entryPath.pathname}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, 'entry.png'));
