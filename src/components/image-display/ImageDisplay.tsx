import styles from "./ImageDisplay.module.scss";

interface Props {
  faviconUrl: string;
  imageUrl: string[];
  imageOg: string;
  twitterImageUrl: string;
  title: string;
  description: string;
  shortUrl: string;
  showContent: boolean;
}

export const ImageDisplay: React.FC<Props> = ({
  faviconUrl,
  imageUrl,
  imageOg,
  twitterImageUrl,
  title,
  description,
  shortUrl,
  showContent,
}) => {
  return (
    <div className={styles.containerPrincipal}>
      <h2>Preview</h2>
      <p className={styles.metaTagText}>
        See how your website will appear on different platforms. Keep in mind
        that it is still in beta and may fail on some social networks.
      </p>
      {showContent && (
        <>
          <div>
            <h2>Favicon</h2>
            {faviconUrl && (
              <img src={faviconUrl} alt="Favicon" className={styles.icon} />
            )}
          </div>
          {/* Show og:image */}
          {imageOg ? (
            <div className={styles.miniature}>
              <h2>OG Image</h2>
              <img src={imageOg} className={styles.img} alt="OG Image" />
            </div>
          ) : (
            <div className={styles.miniature}>
              <h2>OG Image</h2>
              <img src="/images/alert-triangle.svg" className={styles.img} 
              alt="missing-image"
              />
            </div>
          )}
          {/* Show Twitter image */}
          {twitterImageUrl ? (
            <div className={styles.miniature}>
              <h2>Twitter Image</h2>
              <img
                src={twitterImageUrl}
                className={styles.img}
                alt="Twitter Image"
              />
            </div>
          ) : (
            <div className={styles.miniature}>
              <h2>Twitter Image</h2>
              <img src="/images/alert-triangle.svg" className={styles.img} 
              alt="missing-image"
              />
            </div>
          )}
          {imageOg ? (
            <div className={styles.miniature}>
              <h2>X (FORMERLY TWITTER)</h2>
              {imageUrl.map((imageUrl, index) => (
                <div key={index} className={styles.containerImgTwitter}>
                  <img
                    className={styles.imgTwitter}
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                  />
                  <span className={styles.imgTwitterText}>{shortUrl}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.miniature}>
              <h2>X (FORMERLY TWITTER)</h2>
              <div className={styles.containerImgTwitter}>
                <img
                  src="/images/alert-triangle.svg"
                  className={styles.imgTwitter}
                  alt="missing-image"
                />
                <span className={styles.imgTwitterText}>{shortUrl}</span>
              </div>
            </div>
          )}
          {imageOg ? (
            <div className={styles.miniature}>
              <h2>FACEBOOK</h2>
              {imageUrl.map((imageUrl, index) => (
                <div key={index} className={styles.containerImgFacebook}>
                  <img
                    className={styles.imgFacebook}
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                  />
                  <div className={styles.imgFacebook__containerText}>
                    <span className={styles.containerImgFacebook__url}>
                      {shortUrl}
                    </span>
                    <span className={styles.containerImgFacebook__title}>
                      {title}
                    </span>
                    <span className={styles.containerImgFacebook__description}>
                      {description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.miniature}>
              <h2>FACEBOOK</h2>
              <div className={styles.containerImgFacebook}>
                <img
                  className={styles.imgFacebook}
                  src="/images/alert-triangle.svg"
                  alt="missing-image"
                />
                <div className={styles.imgFacebook__containerText}>
                  <span className={styles.containerImgFacebook__url}>
                    {shortUrl}
                  </span>
                  <span className={styles.containerImgFacebook__title}>
                    {title}
                  </span>
                  <span className={styles.containerImgFacebook__description}>
                    {description}
                  </span>
                </div>
              </div>
            </div>
          )}

          {imageOg ? (
            <div className={styles.miniature}>
              <h2>DISCORD</h2>
              {imageUrl.map((imageUrl, index) => (
                <div key={index} className={styles.containerImgDiscord}>
                  <span className={styles.containerImgDiscord__site}>site</span>
                  <span className={styles.containerImgDiscord__title}>
                    {title}
                  </span>
                  <span className={styles.containerImgDiscord__description}>
                    {description}
                  </span>
                  <img
                    className={styles.imgDiscord}
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.miniature}>
              <h2>DISCORD</h2>
              <div className={styles.containerImgDiscord}>
                <span className={styles.containerImgDiscord__site}>site</span>
                <span className={styles.containerImgDiscord__title}>
                  {title}
                </span>
                <span className={styles.containerImgDiscord__description}>
                  {description}
                </span>
                <img
                  className={styles.imgDiscord}
                  src="/images/alert-triangle-white.svg"
                />
              </div>
            </div>
          )}
          {imageOg ? (
            <div className={styles.miniature}>
              <h2>LINKEDIN</h2>
              {imageUrl.map((imageUrl, index) => (
                <div key={index} className={styles.containerImgLinkedin}>
                  <img
                    className={styles.imgLinkedin}
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                  />
                  <div className={styles.containerTextLinkedin}>
                    <span className={styles.containerTextLinkedin__title}>
                      {title}
                    </span>
                    <span className={styles.containerTextLinkedin__url}>
                      {shortUrl}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.miniature}>
              <h2>LINKEDIN</h2>
                <div className={styles.containerImgLinkedin}>
                  <img
                    className={styles.imgLinkedin}
                    src="/images/alert-triangle.svg"
                    alt="missing-image"
                  />
                  <div className={styles.containerTextLinkedin}>
                    <span className={styles.containerTextLinkedin__title}>
                      {title}
                    </span>
                    <span className={styles.containerTextLinkedin__url}>
                      {shortUrl}
                    </span>
                  </div>
                </div>
              
            </div>
            )}
        </>
      )}
    </div>
  );
};
