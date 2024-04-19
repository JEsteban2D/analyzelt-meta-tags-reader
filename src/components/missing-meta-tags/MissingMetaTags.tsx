import styles from './MissingMetaTags.module.scss';

interface Props {
  missingTags: string[];
}

export const MissingMetaTags: React.FC<Props> = ({ missingTags }) => {
  return (
    <div className={styles.containerPrincipal}>
    <h2>Meta Tags Faltantes:</h2>
    {missingTags.length > 0 ? (
      <ul>
        {missingTags.map((tagName, index) => (
          <li className={styles.li} key={index}>{tagName}</li>
        ))}
      </ul>
    ) : (
      <p className={styles.metaTagText}>No hay meta tags faltantes.</p>
    )}
  </div>
  )
}
