type PageSeoOptions = {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
}

const SITE = 'https://dgientco.com'

export function usePageSeo(options: PageSeoOptions) {
  const route = useRoute()
  const path = route.path || '/'
  const url = `${SITE}${path}`
  const fullTitle = options.title.includes('دجینت') ? options.title : `${options.title} - دجینت‌کو`
  const imagePath = options.image || '/images/og.webp'
  const image = imagePath.startsWith('http') ? imagePath : `${SITE}${imagePath}`

  useSeoMeta({
    title: fullTitle,
    description: options.description,
    ogTitle: fullTitle,
    ogDescription: options.description,
    ogType: options.type || 'website',
    ogUrl: url,
    ogImage: image,
    ogLocale: 'fa_IR',
    ogSiteName: 'دجینت‌کو',
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: options.description,
    twitterImage: image,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}
