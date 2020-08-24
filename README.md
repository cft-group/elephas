# [Elephas](https://cft-group.github.io/elephas/)

[![npm version](https://img.shields.io/npm/v/@elephas/core/latest)](https://www.npmjs.com/package/@elephas/core)

Elephas Design System was created to build consistent user interfaces across different teams and products at [Center of Financial Technologies](https://cft.group/en/). Our goal is to maintain great developer experience for software engineers, no matter which platform they are building on.

This repository contains CSS classes along with HTML examples and [Storybook documentation](https://cft-group.github.io/elephas/). It is a base for developing component libraries with [React](https://github.com/cft-group/elephas-react) and [Angular](https://github.com/cft-group/elephas-angular), but can be also used as a standalone solution if you wish to avoid using JS frameworks.

## Installation and Usage

### With Yarn or npm

```bash
# Yarn
yarn add @elephas/core @elephas/layout

# npm
npm install @elephas/core @elephas/layout
```

Import CSS in your project as following:

```js
import '@elephas/layout/styles.min.css';
import '@elephas/core/styles.min.css';
```

### Manual download

Download minified CSS files attached to the [latest release](https://github.com/cft-group/elephas/releases/latest).

### With Unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/@elephas/layout@latest/styles.min.css" />
<link rel="stylesheet" href="https://unpkg.com/@elephas/core@latest/styles.min.css" />
```

### Inter typeface

Elephas components use [Inter font](https://github.com/rsms/inter) with 400, 500, and 600 weights. Make sure to download and add it to your project, or use Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

## License

Source code is under a [custom license](https://github.com/cft-group/elephas/blob/master/LICENSE.md) based on MIT. The license restricts Elephas usage to applications that integrate or interoperate with Center of Financial Technologies software or services, with additional restrictions for external, stand-alone applications.
