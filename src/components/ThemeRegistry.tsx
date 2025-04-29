"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a custom theme with your preferred colors
const theme = createTheme({
  palette: {
    success: {
      main: "#D0FFCC", // Green color for buttons with color="success"
    },
    error: {
      main: "#FFC2C2", // Red color for buttons with color="error"
    },
  },
});

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}