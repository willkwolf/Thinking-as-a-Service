import { cpSync, existsSync, mkdirSync } from 'node:fs';

if (!existsSync('Assets')) {
  console.log('sync-assets: no Assets/ folder, skipping');
  process.exit(0);
}

mkdirSync('public/Assets', { recursive: true });
cpSync('Assets', 'public/Assets', { recursive: true });
console.log('sync-assets: copied Assets/ → public/Assets/');
