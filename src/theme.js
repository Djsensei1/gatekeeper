// src/theme.js
import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ee", // Correct: colors are defined as strings
    accent: "#03dac4",
    background: "#f5f5f5",
    surface: "#ffffff",
    text: "#000000",
    error: "#B00020",
  },
  roundness: 8, // Correct: numbers are properly used for roundness
};

export default theme;
