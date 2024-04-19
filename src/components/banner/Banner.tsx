'use client'
import styles from "./Banner.module.scss";
import { useThemeStore } from './../../store/theme';

export const Banner = () => {
  const { theme } = useThemeStore();

  return (
    <div className={`${styles.banner} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
      <h1 className={styles.banner__title}>Analyzelt</h1>
      <h2 className={styles.banner__text}>Here you URL</h2>      
    </div>
  )
}
