'use client'
import React from "react";
import { useThemeStore } from "../../store/theme";
import styles from "./Background.module.scss";

export const Background = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className={`${styles.background} ${
        theme === "dark"
          ? styles.background__darkTheme
          : styles.background__lightTheme
      }`}
    >
      <div
        className={`${styles.backgroundStar} ${
          theme === "dark"
            ? styles.backgroundStar__darkTheme
            : styles.backgroundStar__lightTheme
        }`}
      >
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>
      <div
        className={`${styles.mountains} ${
          theme === "dark"
            ? styles.mountains__darkTheme
            : styles.mountains__lightTheme
        }`}
      ></div>
      <div
        className={`${styles.midSun} ${
          theme === "dark"
            ? styles.midSun__darkTheme
            : styles.midSun__lightTheme
        }`}
      ></div>
      <div
        className={`${styles.sun} ${
          theme === "dark" ? styles.sun__darkTheme : styles.sun__lightTheme
        }`}
      ></div>
    </div>
  );
};
