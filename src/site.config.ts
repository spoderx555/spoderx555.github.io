import { defineEcConfig } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: false,
  },
  themes: ["one-dark-pro"],
  styleOverrides: {
    borderRadius: "0px",
    codeBackground: "#161616",
    borderColor: "#2a2a2a",
    borderWidth: "1px",
    focusBorder: "transparent",
    frames: {
      editorTabBarBackground: "#181818",
      editorTabBarBorderBottomColor: "transparent",
      terminalTitlebarBorderBottomColor: "transparent",
      editorActiveTabForeground: "#83817d",
      editorActiveTabIndicatorBottomColor: "transparent",
      editorActiveTabBackground: "#161616",
    },
  },
});
