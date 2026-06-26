// Registers locally-bundled Burmese (မြန်မာ) fonts as FontFace objects in the browser.
// Fonts are served from the Lovable CDN via .asset.json pointers.

import chocoCooky from '@/assets/fonts/choco-cooky.ttf.asset.json'
import kengTawng from '@/assets/fonts/keng-tawng03.ttf.asset.json'
import myanmarApril from '@/assets/fonts/myanmar-april.ttf.asset.json'
import myanmarAyarTypewriter from '@/assets/fonts/myanmar-ayar-tyepwriter.ttf.asset.json'
import myanmarAyarWazo from '@/assets/fonts/myanmar-ayar-wazo.ttf.asset.json'
import myanmarHandwriting from '@/assets/fonts/myanmar-handwriting.ttf.asset.json'
import myanmarJojar from '@/assets/fonts/myanmar-jojar.ttf.asset.json'
import myanmarKhittar from '@/assets/fonts/myanmar-khittar.ttf.asset.json'
import myanmarTaunggyi from '@/assets/fonts/myanmar-taunggyi.ttf.asset.json'
import myanmarWaitzar from '@/assets/fonts/myanmar-waitzar.ttf.asset.json'
import pyidaungsu from '@/assets/fonts/pyidaungsu.ttf.asset.json'

export interface BurmeseFontDef {
  key: string
  family: string
  label: string
  url: string
}

export const BURMESE_FONTS: BurmeseFontDef[] = [
  { key: 'mm-pyidaungsu', family: 'Pyidaungsu', label: 'ပြည်ထောင်စု', url: pyidaungsu.url },
  { key: 'mm-myanmar-april', family: 'Myanmar April', label: 'မြန်မာ ဧပြီ', url: myanmarApril.url },
  { key: 'mm-myanmar-ayar-wazo', family: 'Myanmar Ayar Wazo', label: 'အေရ ဝါဆို', url: myanmarAyarWazo.url },
  { key: 'mm-myanmar-ayar-typewriter', family: 'Myanmar Ayar Typewriter', label: 'အေရ စာစက်', url: myanmarAyarTypewriter.url },
  { key: 'mm-myanmar-handwriting', family: 'Myanmar Handwriting', label: 'လက်ရေး', url: myanmarHandwriting.url },
  { key: 'mm-myanmar-jojar', family: 'Myanmar Jojar', label: 'မြန်မာ ဂျိုဂျာ', url: myanmarJojar.url },
  { key: 'mm-myanmar-khittar', family: 'Myanmar Khittar', label: 'မြန်မာ ခေတ်တာ', url: myanmarKhittar.url },
  { key: 'mm-myanmar-taunggyi', family: 'Myanmar Taunggyi', label: 'တောင်ကြီး', url: myanmarTaunggyi.url },
  { key: 'mm-myanmar-waitzar', family: 'Myanmar Waitzar', label: 'မြန်မာ WaitZar', url: myanmarWaitzar.url },
  { key: 'mm-keng-tawng', family: 'Keng Tawng', label: 'ကျိုင်းတောင်း', url: kengTawng.url },
  { key: 'mm-choco-cooky', family: 'Choco Cooky', label: 'ချောကိုကီ', url: chocoCooky.url },
]

let registered = false

export function registerBurmeseFonts() {
  if (registered || typeof window === 'undefined' || typeof FontFace === 'undefined') return
  registered = true
  for (const f of BURMESE_FONTS) {
    try {
      const face = new FontFace(f.family, `url(${f.url}) format('truetype')`, {
        display: 'swap',
      })
      face
        .load()
        .then((loaded) => {
          ;(document.fonts as FontFaceSet).add(loaded)
        })
        .catch((err) => {
          console.log('[burmese font failed]', f.family, err)
        })
    } catch (err) {
      console.log('[burmese font register failed]', f.family, err)
    }
  }
}
