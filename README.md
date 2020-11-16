# Node workshops

# Install Babel (optional)

Run command:

```bash
npm install @babel/core @babel/node --save-dev
```

Install presets

```bash
npm install @babel/preset-env --save-dev
```

Create `.babelrc` with:

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Modify `package.json`:

```json
"scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```