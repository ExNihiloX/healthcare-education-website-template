/**
 * Image CDN Configuration
 *
 * Configure your CDN settings here. Supports Supabase Storage, Cloudinary, or custom CDN.
 */

// Set via environment variable or default
const CDN_BASE = process.env.NEXT_PUBLIC_CDN_URL || 'https://your-cdn.com';
const CDN_TYPE = (process.env.NEXT_PUBLIC_CDN_TYPE || 'supabase') as CDNType;

type CDNType = 'supabase' | 'cloudinary' | 'custom';

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
}

/**
 * Get a transformed image URL from the CDN
 */
export function getImageUrl(path: string, options: ImageOptions = {}): string {
  const { width, height, quality = 80, format = 'auto' } = options;

  // Handle absolute URLs (already full CDN URLs)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Handle relative paths
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  switch (CDN_TYPE) {
    case 'supabase':
      return getSupabaseImageUrl(cleanPath, { width, height, quality });

    case 'cloudinary':
      return getCloudinaryImageUrl(cleanPath, { width, height, quality, format });

    case 'custom':
    default:
      return `${CDN_BASE}/${cleanPath}`;
  }
}

/**
 * Supabase Storage URL with transformations
 */
function getSupabaseImageUrl(
  path: string,
  options: { width?: number; height?: number; quality?: number }
): string {
  const { width, height, quality } = options;
  const params = new URLSearchParams();

  if (width) params.set('width', width.toString());
  if (height) params.set('height', height.toString());
  if (quality) params.set('quality', quality.toString());

  const queryString = params.toString();
  const base = `${CDN_BASE}/storage/v1/render/image/public/${path}`;

  return queryString ? `${base}?${queryString}` : base;
}

/**
 * Cloudinary URL with transformations
 */
function getCloudinaryImageUrl(
  path: string,
  options: { width?: number; height?: number; quality?: number; format?: string }
): string {
  const { width, height, quality, format } = options;
  const transforms: string[] = [];

  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (quality) transforms.push(`q_${quality}`);
  if (format && format !== 'auto') transforms.push(`f_${format}`);
  if (format === 'auto') transforms.push('f_auto');

  transforms.push('c_fill'); // Default crop mode

  const transformString = transforms.join(',');

  return `${CDN_BASE}/image/upload/${transformString}/${path}`;
}

/**
 * Generate srcset for responsive images
 */
export function getSrcSet(
  path: string,
  widths: number[] = [640, 768, 1024, 1280, 1536]
): string {
  return widths
    .map((width) => `${getImageUrl(path, { width })} ${width}w`)
    .join(', ');
}

/**
 * Get placeholder blur data URL
 */
export function getBlurDataUrl(): string {
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgICAgMBAAAAAAAAAAAAAQIDBAARBRIGITFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEQ/AN3g4qOOteEvyBp4pJZGYxyAaUDWtfuMZb8U//Z';
}

/**
 * Image categories for organization
 */
export const imageCategories = {
  hero: 'images/hero',
  team: 'images/team',
  campus: 'images/campus',
  programs: 'images/programs',
  testimonials: 'images/testimonials',
  blog: 'images/blog',
  icons: 'images/icons',
} as const;

export type ImageCategory = keyof typeof imageCategories;
