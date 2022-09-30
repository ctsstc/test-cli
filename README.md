# Steps

## NPM & Dependencies

### Initialize NPM

- `npm init -y`

### Install Dependencies

- `npm install zx`

### Ignore Chaos

- `echo node_modules > .gitignore`

## Entrypoint

`package.json`

```json
"bin": {
  "cognitoHash": "index.js"
},
```
