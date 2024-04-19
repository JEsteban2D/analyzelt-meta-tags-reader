import { useThemeStore } from '../../store/theme';
import styles from './MetaTags.module.scss';

interface Tags {
  name: string | null;
  content: string | null;
  property: string | null;
}

interface Props {
  metaTags: Tags[];
  title: string;
  showContent: boolean;
}

export const MetaTags: React.FC<Props> = ({ metaTags, title, showContent }) => {
  const { theme } = useThemeStore();

  return (
    <div className={styles.containerPrincipal}>
      <h2 className={styles.metaTagTitle}>Meta Tags Existentes:</h2>  
      <p className={styles.metaTagText}>Here you can see the meta tags of your application or webpage.</p>
      {showContent && (
        <>  
      <p><span className={`${styles.titleTagColor} ${theme === "dark" ? styles.titleTagColor__darkTheme : styles.titleTagColor__lightTheme}`}>Título:</span> {title}</p>  
      {metaTags.map((tag, index) => (
        <div key={index}>
          <p className={styles.metaTags}>
            <strong className={`${styles.titleTagColor} ${theme === "dark" ? styles.titleTagColor__darkTheme : styles.titleTagColor__lightTheme}`}>{tag.name || tag.property}:</strong> {tag.content}
          </p>
        </div>
      ))}
      </>
      )}
    </div>
  );
};
