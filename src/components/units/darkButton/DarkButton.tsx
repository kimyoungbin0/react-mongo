import React from "react";
import { ThemeModeWrapper } from "./DarkButton.style";

interface ThemeModeButtonProps {
  toggleTheme: () => void;
  themeMode: "lightTheme" | "darkTheme";
}

export const ThemeModeButton: React.FC<ThemeModeButtonProps> = ({
  toggleTheme,
  themeMode,
}) => {
  return (
    <ThemeModeWrapper onClick={toggleTheme}>
      {themeMode === "lightTheme" ? "🌝" : "🌚"}
    </ThemeModeWrapper>
  );
};
