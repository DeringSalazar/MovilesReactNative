/**
 * Detecta si una URL es de YouTube
 */
export const isYouTubeUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  
  const youtubeRegex = /(?:youtube\.com|youtu\.be)\/.+/;
  return youtubeRegex.test(url);
};

/**
 * Extrae el ID del video de YouTube de una URL
 */
export const extractYouTubeId = (url: string): string | null => {
  if (!url || typeof url !== 'string') return null;

  // Formatos soportados:
  // https://www.youtube.com/watch?v=dQw4w9WgXcQ
  // https://youtu.be/dQw4w9WgXcQ
  // https://www.youtube.com/embed/dQw4w9WgXcQ
  
  const regexPatterns = [
    /(?:youtube\.com\/watch\?v=)([^\s&/?#]+)/,
    /(?:youtu\.be\/)([^\s&/?#]+)/,
    /(?:youtube\.com\/embed\/)([^\s&/?#]+)/,
  ];

  for (const pattern of regexPatterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * Detecta si una cadena es una ruta de imagen local (assets/) o remota
 */
export const isLocalImagePath = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  
  return url.startsWith('assets/') || url.startsWith('./assets/');
};

/**
 * Determina el tipo de media (imagen, video de YouTube, o URL remota)
 */
export type MediaType = 'image' | 'youtube' | 'unknown';

export const getMediaType = (url: string): MediaType => {
  if (!url || typeof url !== 'string') return 'unknown';
  
  if (isYouTubeUrl(url)) return 'youtube';
  if (isLocalImagePath(url) || url.startsWith('http')) return 'image';
  
  return 'unknown';
};
