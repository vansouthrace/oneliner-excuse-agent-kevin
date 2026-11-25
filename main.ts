import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Technically the bug shipped itself — I merely wrote the code, reviewed the code, and approved the code. The compiler started it.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
