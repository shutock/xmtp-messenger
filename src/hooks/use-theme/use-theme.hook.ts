"use client";

import React from "react";

type ITheme = "dark" | "light" | "system" | string;

const themes: ITheme[] = ["system", "light", "dark"];

export const useTheme = () => {
  const initTheme: ITheme = window.localStorage.getItem("theme") || "system";
  const [theme, setTheme] = React.useState<ITheme>(initTheme);

  React.useEffect(() => {
    themes.map((th) => {
      if (theme === th) {
        themes.map((th) => document.body.classList.remove(th));

        document.body.classList.add(th);
        setTheme(th);
        window.localStorage.setItem("theme", th);
      }
    });
  }, [theme]);

  return { theme, setTheme, themes };
};
