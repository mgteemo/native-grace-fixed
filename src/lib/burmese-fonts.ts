// Burmese (မြန်မာ) font catalog. Font files are bundled as CDN assets
// and registered via @font-face rules in src/styles.css — no runtime API needed.

export interface BurmeseFontDef {
  key: string
  family: string
  label: string
}

export const BURMESE_FONTS: BurmeseFontDef[] = [
  { key: 'mm-pyidaungsu', family: 'Pyidaungsu', label: 'ပြည်ထောင်စု' },
  { key: 'mm-myanmar-april', family: 'Myanmar April', label: 'မြန်မာ ဧပြီ' },
  { key: 'mm-myanmar-ayar-wazo', family: 'Myanmar Ayar Wazo', label: 'အေရ ဝါဆို' },
  { key: 'mm-myanmar-ayar-typewriter', family: 'Myanmar Ayar Typewriter', label: 'အေရ စာစက်' },
  { key: 'mm-myanmar-handwriting', family: 'Myanmar Handwriting', label: 'လက်ရေး' },
  { key: 'mm-myanmar-jojar', family: 'Myanmar Jojar', label: 'မြန်မာ ဂျိုဂျာ' },
  { key: 'mm-myanmar-khittar', family: 'Myanmar Khittar', label: 'မြန်မာ ခေတ်တာ' },
  { key: 'mm-myanmar-taunggyi', family: 'Myanmar Taunggyi', label: 'တောင်ကြီး' },
  { key: 'mm-myanmar-waitzar', family: 'Myanmar Waitzar', label: 'မြန်မာ WaitZar' },
  { key: 'mm-keng-tawng', family: 'Keng Tawng', label: 'ကျိုင်းတောင်း' },
  { key: 'mm-choco-cooky', family: 'Choco Cooky', label: 'ချောကိုကီ' },
]
