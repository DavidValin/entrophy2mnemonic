# entrophy2mnemonic

CLI that produces bip39 mnemonic words from entrophy hex input

### Install
`npm install -g entrophy2mnemonic`

### Samples

##### Generate 12 words bip39 mnemonic from 32 long hex entrophy:
`entrophy2mnemonic 87097951FA873FFFC70EBE02938E87D6`

##### Generate 24 words bip39 mnemonic from 64 long hex entrophy:
`entrophy2mnemonic 012B005BA6C95912EDF4398317660BAE4D4A33A2ADB784C077B48FCB26875904`

##### Generate 24 words bip39 mnemonic from /dev/urandom 64 long hex entrophy:
`xxd -u -l 32 -p /dev/urandom | tr -d \\n | entrophy2mnemonic`

##### Generate 12 words bip39 mnemonic from /dev/urandom 32 long hex entrophy:
`xxd -u -l 16 -p /dev/urandom | tr -d \\n | entrophy2mnemonic`

##### Get help:
`entrophy2mnemonic --help`
