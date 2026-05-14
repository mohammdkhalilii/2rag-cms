type PayloadMedia =
  | string
  | number
  | {
      id?: string | number
      url?: string | null
      alt?: string | null
      filename?: string | null
      width?: number | null
      height?: number | null
      sizes?: Record<
        string,
        {
          url?: string | null
          width?: number | null
          height?: number | null
        }
      > | null
    }
  | null
  | undefined

export function getMediaUrl(media: PayloadMedia, size?: string): string | null {
  if (!media || typeof media !== 'object') {
    return null
  }

  if (size && media.sizes?.[size]?.url) {
    return media.sizes[size].url
  }

  if (media.url) {
    return media.url
  }

  if (media.filename) {
    return `/api/media/file/${media.filename}`
  }

  return null
}

export function getMediaAlt(media: PayloadMedia, fallback = ''): string {
  if (!media || typeof media !== 'object') {
    return fallback
  }

  return media.alt || fallback
}
