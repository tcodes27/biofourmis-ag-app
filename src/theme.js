import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#cddbe2",
          200: "#9bb8c4",
          300: "#6a94a7",
          400: "#387189",
          500: "#064d6c",
          600: "#053e56",
          700: "#042e41",
          800: "#021f2b",
          900: "#010f16",
        },
        secondary: {
          100: "#f0f9ff",
          200: "#e1f3ff",
          300: "#d2edff",
          400: "#c3e7ff",
          500: "#b4e1ff",
          600: "#90b4cc",
          700: "#6c8799",
          800: "#485a66",
          900: "#242d33",
        },
        accentColor: {
          100: "#cfe6ef",
          200: "#9fcddf",
          300: "#6fb5d0",
          400: "#3f9cc0",
          500: "#0f83b0",
          600: "#0c698d",
          700: "#094f6a",
          800: "#063446",
          900: "#031a23",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#010f16",
          200: "#021f2b",
          300: "#042e41",
          400: "#053e56",
          500: "#064d6c",
          600: "#387189",
          700: "#6a94a7",
          800: "#9bb8c4",
          900: "#cddbe2",
        },
        secondary: {
          100: "#242d33",
          200: "#485a66",
          300: "#6c8799",
          400: "#90b4cc",
          500: "#b4e1ff",
          600: "#c3e7ff",
          700: "#d2edff",
          800: "#e1f3ff",
          900: "#f0f9ff",
        },
        accentColor: {
          100: "#031a23",
          200: "#063446",
          300: "#094f6a",
          400: "#0c698d",
          500: "#0f83b0",
          600: "#3f9cc0",
          700: "#6fb5d0",
          800: "#9fcddf",
          900: "#cfe6ef",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.accentColor[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.accentColor[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
