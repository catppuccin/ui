<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin UI for <a href="https://reactjs.org/">React</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/ui/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/ui?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/ui/issues"><img src="https://img.shields.io/github/issues/catppuccin/ui?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/ui/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/ui?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

## Usage

_TODO_

### With TailwindCSS
To get started you need to extend (or add) the @catppuccin/ui Tailwind configuration.

Step 1: Import configuration
```
// tailwind.config.js
const catppuccin = require('@catppuccin/ui/tailwind');
```

Step 2: Extend your existing configuration

```
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		...catppuccin.content,
	],
	theme: {
		...catppuccin.theme,
	},
	plugins: [
		...catppuccin.plugins,
	],
};
```

This will add the @catppuccin/tailwindcss plugin + a few other default settings.

### Standalone
_Not supported yet (but the css file is located at: `@catppuccin/ui/dist/catppuccin-ui.css`) if u wanna give it a go._


## 💝 Thanks to

- [didair](https://github.com/didair)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
