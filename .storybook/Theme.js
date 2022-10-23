import { create } from "@storybook/theming";
import { variants } from "@catppuccin/palette";

const flavour = "mocha";
const palette = Object.entries(variants[flavour]).map(([k, v]) => {
  return {
    [k]: v.hex,
  };
}).reduce((acc, curr) => ({ ...acc, ...curr }), {});

export default create({
  base: "dark",

  colorPrimary: palette.pink,
  colorSecondary: palette.sapphire,

  appBg: palette.crust,
  appContentBg: palette.mantle,
  appBorderColor: palette.crust,
  appBorderRadius: 4,

  barTextColor: palette.text,
  barSelectedColor: palette.rosewater,
  barBg: palette.mantle,

  inputBg: palette.mantle,
  inputBorder: palette.crust,
  inputTextColor: palette.text,
  inputBorderRadius: 4,

  textColor: palette.text,
  textInverseColor: palette.crust,
  fontBase: "'Inter', sans-serif",
  fontCode: "'Fira Code', monospace",

  brandTitle: "Catppuccin UI",
  brandUrl: "https://catppuccin.com",
  brandImage: "/catppuccin-ui.svg",
  brandTarget: "_blank",
});
