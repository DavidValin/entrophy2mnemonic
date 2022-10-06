#!/usr/bin/env node

const bip39 = require("bip39");

if (process.argv[2]) {
  if (process.argv[2] === "--help") {
    process.stdout.write(`\n Usage:\n`);
    process.stdout.write(`\n   - Generate 12 words bip39 mnemonic from 32 long hex entrophy:`);
    process.stdout.write(`\n     entrophy2mnemonic 87097951FA873FFFC70EBE02938E87D6\n`);
    process.stdout.write(`\n   - Generate 24 words bip39 mnemonic from 64 long hex entrophy:`);
    process.stdout.write(`\n     entrophy2mnemonic 012B005BA6C95912EDF4398317660BAE4D4A33A2ADB784C077B48FCB26875904\n`);
    process.stdout.write(`\n   - Generate 24 words bip39 mnemonic from /dev/urandom 64 long hex entrophy:`);
    process.stdout.write(`\n     xxd -u -l 32 -p /dev/urandom | tr -d \\\\n | entrophy2mnemonic\n\n`);
    process.stdout.write(`\n   - Generate 12 words bip39 mnemonic from /dev/urandom 32 long hex entrophy:`);
    process.stdout.write(`\n     xxd -u -l 16 -p /dev/urandom | tr -d \\\\n | entrophy2mnemonic\n\n`);
    return 0;
  }
  if (process.argv[2].length !== 32 && process.argv[2].length !== 64) {
    process.stdout.write(`\n ! Error, you need to provide entropy of 32 or 64 hex characters long\n\n`);
    return -1;
  }
  generateAndDisplay(process.argv[2]);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (data) => {
    generateAndDisplay(data);
  });
}

function generateAndDisplay(seed) {
  const mnemonic = bip39.entropyToMnemonic(seed);
  process.stdout.write(`\n - seed size:\t\t${seed.length} bytes\n`);
  process.stdout.write(` - seed:\t\t${seed}\n`);
  process.stdout.write(` - mnemomic words:\t${mnemonic.split(" ").length}\n`);
  process.stdout.write(` - mnemomic:\t\t${mnemonic}\n\n`);
}
