'use client'
import { useState } from "react";
import styles from "./MetaTagsDisplay.module.scss";
import { MetaTagService } from "../../services/MetaTagService";
import { MetaTags } from "../meta-tags/MetaTags";
import { MissingMetaTags } from "../missing-meta-tags/MissingMetaTags";
import { ImageDisplay } from "../image-display/ImageDisplay";
import { ShortUrlService } from "../../services/ShortUrlService";
import { useThemeStore } from "../../store/theme";

export const MetaTagsDisplay = () => {
  const { theme } = useThemeStore();
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const {
    fetchData,
    metaTags,
    missingTags,
    faviconUrl,
    imageUrl,
    ogImageUrl,
    twitterImageUrl,
    title,
    description,
  } = MetaTagService({ url });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
    const { shortenedUrl } = ShortUrlService({ url });
    setShortenedUrl(shortenedUrl);
    setButtonClicked(true);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className={styles.inputButton} type="submit">
          Analyze
        </button>
      </form>
      <div className={`${styles.textPresentation} ${theme === "dark" ? styles.textPresentation__darkTheme : styles.textPresentation__lightTheme}`}>
        <span>
          Here you can see some of the meta tags that can be identified on your
          website. Compare them with the missing meta tags and preview the
          images on different social networks to help improve your website is
          SEO.
        </span>
      </div>
      <section className={styles.section}>
        <div className={styles.containerTags}>
          <div className={styles.tags}>
            <MetaTags
              metaTags={metaTags}
              title={title}
              showContent={buttonClicked}
            />
          </div>
          <div className={styles.missingTags}>
            <MissingMetaTags missingTags={missingTags} />
          </div>
        </div>
        <div className={styles.containerTwo}>
          <ImageDisplay
            showContent={buttonClicked}
            faviconUrl={faviconUrl}
            imageUrl={[imageUrl]}
            imageOg={ogImageUrl}
            twitterImageUrl={twitterImageUrl}
            title={title}
            description={description}
            shortUrl={shortenedUrl}
          />
        </div>
      </section>
    </div>
  );
};
