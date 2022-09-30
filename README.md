# Steps

## NPM & Dependencies

### Initialize NPM

- `npm init -y`

### Install Dependencies

- `npm install zx`

### Ignore Chaos

- `echo node_modules > .gitignore`

## Entrypoint

The entrypoint name must match the github repository name.

`package.json`

```json
"bin": {
  "test-cli": "index.mjs"
},
```

## Running

- Note: No `.com`
- Replace with your username
- Replace with your repository name

````bash

```shell
npx github:ctsstc/test-cli
````
