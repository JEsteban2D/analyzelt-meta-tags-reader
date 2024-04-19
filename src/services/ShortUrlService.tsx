export const ShortUrlService = ({ url }: { url: string }) => {
  const extractDomain = (url: string) => {
    // Remove protocol
    let domain = url.replace(/^https?:\/\//i, "");

    // Remove www subdomain if present
    domain = domain.replace(/^www\./i, "");

    // Remove path after the domain
    domain = domain.split("/")[0];

    return domain.toUpperCase();
  };

  const shortenedUrl = extractDomain(url);

  return {
    shortenedUrl
  };
};
