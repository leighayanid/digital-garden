---
title: Vue 3 with Vite, Tailwind CSS, ESLint and Prettier
description: Learn how to set up Vue 3 project with Vite, TailwindCSS, Eslint and Prettier
date: 2022-02-04
tags:
  - vite
  - tailwindcss
  - eslint
---

## Create a Vue 3 project with Vite

```bash
yarn create vite --template vue
```

## Install Tailwind CSS

```bash
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Initialize Tailwind CSS. Inside project folder:

```bash
yarn tailwindcss init -p
```

Modify <em>tailwind.config.js</em>

```js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Create a css file and append the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the stylesheet in the main.js file.

```js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
createApp(App).mount('#app')
```

## Set up ESLint and Prettier

Install dependencies.

```bash
yarn add -D eslint eslint-config-prettier eslint-plugin-prettie eslint-plugin-vue prettier
```

Open terminal and configure eslint

```bash
yarn eslint --init
```

<em>.eslintrc.js</em> will be created.

Update <em>.eslintrc.js</em>

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
}
```

Create <em>.prettierrc.js</em> inside the root folder and paste the following code

```js
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'none',
}
```

Formatting code:

```bash
yarn eslint --ext .js --ext .vue . --fix
```

## Set up Stylelint for CSS

```bash
yarn add -D stylelint stylelint-config-standard
```

Create <em>.stylelint.config.js</em> and paste the following code

```js
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    indentation: 4,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
```

## VSCode Settings

Create <em>.vscode/settings.json</em> inside the root project folder and paste the following code

```
{
  "eslint.validate": ["vue", "javascript"],
  "eslint.packageManager": "yarn",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
  "css.validate": false,
  "tailwindCSS.emmetCompletions": true
}
```

Source: <https://jdmendozar.medium.com/how-to-setup-vue-3-with-vite-tailwind-and-eslint-prettier-b55644005c76>
