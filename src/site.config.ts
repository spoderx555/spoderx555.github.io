import { defineEcConfig } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: false,
  },
  themes: ["one-dark-pro"],
  styleOverrides: {
    codeBackground: "#161616",
    borderColor: "#363635",
    borderWidth: "1px",
    focusBorder: "transparent",
    frames: {
      editorTabBarBackground: "#121212",
      editorTabBarBorderBottomColor: "transparent",
      terminalTitlebarBorderBottomColor: "transparent",
      editorActiveTabForeground: "#83817d",
      editorActiveTabIndicatorBottomColor: "transparent",
      editorActiveTabBackground: "#161616",
    },
  },
});
