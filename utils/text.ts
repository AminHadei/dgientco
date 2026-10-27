export function asText(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

export function toNewsCard(article: {
  _path?: string;
  title?: string;
  excerpt?: unknown;
  image?: unknown;
  date?: unknown;
}) {
  const date =
    typeof article.date === "string" || article.date instanceof Date
      ? article.date
      : undefined;

  return {
    slug: article._path?.split("/").pop() || "",
    title: article.title || "",
    excerpt: asText(article.excerpt),
    image: asText(article.image),
    date,
  };
}
