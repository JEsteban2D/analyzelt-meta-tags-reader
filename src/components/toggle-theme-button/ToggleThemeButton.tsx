'use client'
import styles from "./ToggleThemeButton.module.scss";
import { useThemeStore } from './../../store/theme';

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.container__darkTheme : styles.container__lightTheme}`}>
      <button className={`${styles.button} ${theme === 'dark' ? styles.button__darkTheme : styles.button__lightTheme}`}  onClick={toggleTheme}>
        {theme === 'light'}
      </button>
    </div>
  );
};
