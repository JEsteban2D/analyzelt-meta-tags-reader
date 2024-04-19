import { useState } from "react";

export const MetaTagService = ({ url }: { url: string }) => {
  const [metaTags, setMetaTags] = useState<any[]>([]);
  const [missingTags, setMissingTags] = useState<string[]>([]);
  const [faviconUrl, setFaviconUrl] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [ogImageUrl, setOgImageUrl] = useState<string>("");
  const [twitterImageUrl, setTwitterImageUrl] = useState<string>("");
  const [domain, setDomain] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");

      const metaTagsArray = extractMetaTags(doc);
      setMetaTags(metaTagsArray);

      const importantMetaTags = filterImportantMetaTags(metaTagsArray);
      setMissingTags(findMissingTags(importantMetaTags));

      const faviconUrl = findFaviconUrl(doc, url);
      setFaviconUrl(faviconUrl);

      const imageUrls = findImageUrls(metaTagsArray);
      setImageUrl(imageUrls.image);
      setOgImageUrl(imageUrls.ogImage);
      setTwitterImageUrl(imageUrls.twitterImage);

      const domain = getDomainFromUrl(url);
      setDomain(domain);

      const pageTitle = findTitleTag(doc);
      setTitle(pageTitle);

      const pageDescription = findDescriptionTag(doc);
      setDescription(pageDescription);

    } catch (error) {
      console.error("Error al analizar los meta tags:", error);
    }
  };

  const extractMetaTags = (doc: Document) => {
    return Array.from(doc.querySelectorAll("meta")).map((tag) => ({
      name: tag.getAttribute("name"),
      content: tag.getAttribute("content"),
      property: tag.getAttribute("property"),
    }));
  };

  const filterImportantMetaTags = (metaTagsArray: any[]) => {
    return metaTagsArray.filter((tag) =>
      [
        "title",
        "description",
        "keywords",
        "author",
        "viewport",
        "og:title",
        "og:description",
        "og:image",
        "og:url",
        "og:type",
        "og:domain",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:card",
        "twitter:domain",
        "twitter:url",
      ].includes(tag.name || tag.property)
    );
  };

  const findMissingTags = (importantMetaTags: any[]) => {
    return [
      "description",
      "keywords",
      "author",
      "viewport",
      "og:title",
      "og:description",
      "og:image",
      "og:url",
      "og:type",
      "og:domain",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:card",
      "twitter:domain",
      "twitter:url",
    ].filter(
      (tagName) =>
        !importantMetaTags.some(
          (tag) => tag.name === tagName || tag.property === tagName
        )
    );
  };

  const findFaviconUrl = (doc: Document, baseUrl: string) => {
    const faviconTag = doc.querySelector(
      'link[rel="icon"], link[rel="shortcut icon"]'
    );
    if (faviconTag) {
      const faviconHref = faviconTag.getAttribute("href") || "";
      const faviconUrl = new URL(faviconHref, baseUrl).href;
      return faviconUrl;
    }
    return "";
  };

  const findImageUrls = (metaTagsArray: any[]) => {
    const imageTag = metaTagsArray.find(
      (tag) => tag.property === "og:image" || tag.property === "twitter:image"
    );
    const ogImageTag = metaTagsArray.find((tag) => tag.property === "og:image");
    const twitterImageTag = metaTagsArray.find(
      (tag) => tag.property === "twitter:image"
    );
    return {
      image: imageTag?.content || "",
      ogImage: ogImageTag?.content || "",
      twitterImage: twitterImageTag?.content || "",
    };
  };

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return domain;
    } catch (error) {
      console.error("Error al obtener el dominio de la URL:", error);
      return null;
    }
  };

  const findTitleTag = (doc: Document) => {
    const titleTag = doc.querySelector("title");
    return titleTag ? titleTag.textContent || "" : "";
  };

  const findDescriptionTag = (doc: Document) => {
    const metaDescriptionTag = doc.querySelector("meta[name='description']");
    return metaDescriptionTag
      ? metaDescriptionTag.getAttribute("content") || ""
      : "";
  };  

  return {
    fetchData,
    metaTags,
    missingTags,
    faviconUrl,
    imageUrl,
    ogImageUrl,
    twitterImageUrl,
    domain,
    title,
    description
  };
};
