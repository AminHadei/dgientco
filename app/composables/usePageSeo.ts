import { sizeOf } from "~/utils/images";
import {
  absoluteUrl,
  defaultDescription,
  defaultOgImage,
  normalizeSiteUrl,
  pageTitle,
  siteName,
} from "~/utils/site";

type Crumb = {
  name: string;
  path: string;
};

type JsonLdNode = Record<string, unknown>;

export type PageSeoOptions = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
  breadcrumbs?: Crumb[];
  home?: boolean;
};

function organizationNode(siteUrl: string, description: string): JsonLdNode {
  const url = absoluteUrl(siteUrl, "/");
  return {
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: siteName,
    url,
    description,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteUrl, "/icon-512.png"),
    },
  };
}

function websiteNode(siteUrl: string): JsonLdNode {
  const url = absoluteUrl(siteUrl, "/");
  return {
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: siteName,
    url,
    inLanguage: "fa-IR",
    publisher: { "@id": `${url}#organization` },
  };
}

function breadcrumbNode(siteUrl: string, crumbs: Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(siteUrl, crumb.path),
    })),
  };
}

function articleNode(options: {
  siteUrl: string;
  url: string;
  headline: string;
  description: string;
  image: string;
  publishedTime?: string;
}): JsonLdNode {
  const publisherUrl = absoluteUrl(options.siteUrl, "/");
  return {
    "@type": "NewsArticle",
    headline: options.headline,
    description: options.description,
    image: [options.image],
    ...(options.publishedTime ? { datePublished: options.publishedTime } : {}),
    mainEntityOfPage: options.url,
    inLanguage: "fa-IR",
    author: {
      "@type": "Organization",
      name: siteName,
      url: publisherUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(options.siteUrl, "/icon-512.png"),
      },
    },
  };
}

export function usePageSeo(options: PageSeoOptions) {
  const config = useRuntimeConfig();
  const route = useRoute();
  const siteUrl = normalizeSiteUrl(String(config.public.siteUrl || ""));
  const path = route.path || "/";
  const url = absoluteUrl(siteUrl, path);
  const fullTitle = pageTitle(options.title);
  const description = options.description || defaultDescription;
  const imagePath = options.image || defaultOgImage;
  const image = imagePath.startsWith("http")
    ? imagePath
    : absoluteUrl(siteUrl, imagePath);
  const [width, height] = imagePath.startsWith("http")
    ? [1200, 630]
    : sizeOf(imagePath);
  const imageAlt = options.imageAlt || siteName;

  const graph: JsonLdNode[] = [];
  if (options.home) {
    graph.push(organizationNode(siteUrl, description), websiteNode(siteUrl));
  }
  if (options.type === "article") {
    graph.push(
      articleNode({
        siteUrl,
        url,
        headline: options.title,
        description,
        image,
        publishedTime: options.publishedTime,
      }),
    );
  }
  if (options.breadcrumbs && options.breadcrumbs.length > 1) {
    graph.push(breadcrumbNode(siteUrl, options.breadcrumbs));
  }

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: options.type || "website",
    ogUrl: url,
    ogImage: image,
    ogImageAlt: imageAlt,
    ogImageWidth: width,
    ogImageHeight: height,
    ogLocale: "fa_IR",
    ogSiteName: siteName,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: image,
    twitterImageAlt: imageAlt,
    robots: options.noindex ? "noindex, nofollow" : "index, follow",
    ...(options.publishedTime ? { articlePublishedTime: options.publishedTime } : {}),
  });

  useHead({
    title: fullTitle,
    titleTemplate: "%s",
    link: options.noindex ? [] : [{ key: "canonical", rel: "canonical", href: url }],
    script: graph.length
      ? [
          {
            key: "ld-json",
            type: "application/ld+json",
            innerHTML: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": graph,
            }).replace(/</g, "\\u003c"),
          },
        ]
      : [],
  });
}
