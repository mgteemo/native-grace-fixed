export type TextAlign = 'left' | 'center' | 'right'

export type TextureType = 'none' | 'gold' | 'sunset' | 'ocean' | 'neon' | 'mono'

export interface TextLayer {
  id: string
  text: string
  fontKey: string
  fontSize: number
  fontWeight: number
  italic: boolean
  align: TextAlign
  letterSpacing: number
  lineHeight: number
  color: string
  opacity: number
  x: number
  y: number
  rotation: number
  strokeWidth: number
  strokeColor: string
  shadowColor: string
  shadowBlur: number
  shadowOffsetX: number
  shadowOffsetY: number
  texture: TextureType
  highlight: boolean
  highlightColor: string
  skewX: number
  skewY: number
}

export type FontLanguage = 'en' | 'my'

export interface FontOption {
  key: string
  label: string
  cssVar: string
  category: 'Sans' | 'Serif' | 'Display' | 'Script' | 'Burmese'
  language: FontLanguage
}

import { BURMESE_FONTS } from './burmese-fonts'

const ENGLISH_FONTS: FontOption[] = [
  { key: 'inter', label: 'Inter', cssVar: 'var(--font-inter)', category: 'Sans', language: 'en' },
  { key: 'poppins', label: 'Poppins', cssVar: 'var(--font-poppins)', category: 'Sans', language: 'en' },
  { key: 'montserrat', label: 'Montserrat', cssVar: 'var(--font-montserrat)', category: 'Sans', language: 'en' },
  { key: 'oswald', label: 'Oswald', cssVar: 'var(--font-oswald)', category: 'Sans', language: 'en' },
  { key: 'bebas', label: 'Bebas Neue', cssVar: 'var(--font-bebas)', category: 'Display', language: 'en' },
  { key: 'anton', label: 'Anton', cssVar: 'var(--font-anton)', category: 'Display', language: 'en' },
  { key: 'playfair', label: 'Playfair Display', cssVar: 'var(--font-playfair)', category: 'Serif', language: 'en' },
  { key: 'lobster', label: 'Lobster', cssVar: 'var(--font-lobster)', category: 'Script', language: 'en' },
  { key: 'pacifico', label: 'Pacifico', cssVar: 'var(--font-pacifico)', category: 'Script', language: 'en' },
  { key: 'caveat', label: 'Caveat', cssVar: 'var(--font-caveat)', category: 'Script', language: 'en' },
]

const BURMESE_FONT_OPTIONS: FontOption[] = BURMESE_FONTS.map((f) => ({
  key: f.key,
  label: f.label,
  cssVar: `'${f.family}'`,
  category: 'Burmese' as const,
  language: 'my' as const,
}))

export const FONTS: FontOption[] = [...ENGLISH_FONTS, ...BURMESE_FONT_OPTIONS]

export function fontsByLanguage(lang: FontLanguage): FontOption[] {
  return FONTS.filter((f) => f.language === lang)
}

export function fontFamily(key: string): string {
  const f = FONTS.find((f) => f.key === key)
  if (!f) return 'sans-serif'
  const fallback = f.language === 'my' ? "'Pyidaungsu', 'Padauk', sans-serif" : 'sans-serif'
  return `${f.cssVar}, ${fallback}`
}


export const TEXTURES: Record<TextureType, { label: string; gradient: string | null }> = {
  none: { label: 'Solid', gradient: null },
  gold: { label: 'Gold', gradient: 'linear-gradient(180deg, #fceabb 0%, #f8b500 45%, #b8860b 100%)' },
  sunset: { label: 'Sunset', gradient: 'linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)' },
  ocean: { label: 'Ocean', gradient: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)' },
  neon: { label: 'Neon', gradient: 'linear-gradient(90deg, #00f260 0%, #0575e6 100%)' },
  mono: { label: 'Steel', gradient: 'linear-gradient(180deg, #e0e0e0 0%, #757f9a 100%)' },
}

let counter = 0
export function createTextLayer(text = 'Your text'): TextLayer {
  counter += 1
  return {
    id: `layer-${Date.now()}-${counter}`,
    text,
    fontKey: 'anton',
    fontSize: 12,
    fontWeight: 700,
    italic: false,
    align: 'center',
    letterSpacing: 0,
    lineHeight: 1.1,
    color: '#ffffff',
    opacity: 1,
    x: 50,
    y: 50,
    rotation: 0,
    strokeWidth: 0,
    strokeColor: '#000000',
    shadowColor: '#000000',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    texture: 'none',
    highlight: false,
    highlightColor: '#2563eb',
    skewX: 0,
    skewY: 0,
  }
}
