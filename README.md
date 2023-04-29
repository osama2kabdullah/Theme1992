### Add Tailwind CSS in shopify theme

1. Initial `node.js` package manager with `npm` or `yarn` by running

```bash
yarn init -y #or
npm init -y
```

2. Install packages and initialize a Tailwind config file

```bash
npm install -D tailwindcss @shopify/prettier-plugin-liquid
#or
npx tailwindcss init
```

3. Create a CSS file in the `assets` directory. Name it `tailwind.css` or anything you want. doesnt matter.
4. Paste this line of code in this file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add a Liquid Stylesheet Tag to `theme.liquid` File in `layouts` Folder.

```liquid
{{ 'application.css' | asset_url | stylesheet_tag }}
{{ 'base.css' | asset_url | stylesheet_tag }}
```

6. Include this in your `tailwind.config.js` file.

```js
module.exports = {
    ...
    content: ['./**/*.{liquid,json}'],
    ...
}
```

7. Add a Watch Script to `package.json` file. This will continuasly compile your Tailwind CSS into raw css. Then your theme get the raw css.

```json
"scripts": {
    "watch": "npx tailwind -i ./assets/tailwind.css -o ./assets/application.css --watch"
  },
```