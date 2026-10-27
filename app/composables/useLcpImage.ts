import { withBase } from "~/utils/withBase";

function prefixSrcset(baseURL: string, srcset: string): string {
  return srcset
    .split(",")
    .map((part) => {
      const [url, descriptor] = part.trim().split(/\s+/);
      if (!url) return "";
      return `${withBase(baseURL, url)}${descriptor ? ` ${descriptor}` : ""}`;
    })
    .filter(Boolean)
    .join(", ");
}

export function useLcpImage(src: string, srcset?: string) {
  const baseURL = useRuntimeConfig().app.baseURL;
  useHead({
    link: [
      {
        key: "lcp-image",
        rel: "preload",
        as: "image",
        href: withBase(baseURL, src),
        fetchpriority: "high",
        ...(srcset
          ? { imagesrcset: prefixSrcset(baseURL, srcset), imagesizes: "100vw" }
          : {}),
      },
    ],
  });
}
