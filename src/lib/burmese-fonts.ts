// Burmese (မြန်မာ) font catalog. Font files are served locally from /public/fonts
// and registered via @font-face rules in src/styles.css — no runtime API needed.

export interface BurmeseFontDef {
  key: string
  family: string
  label: string
}

export const BURMESE_FONTS: BurmeseFontDef[] = [
  { key: 'mm-pyidaungsu', family: 'Pyidaungsu', label: 'ပြည်ထောင်စု' },
  { key: 'mm-myanmar-khittar', family: 'Myanmar Khittar', label: 'မြန်မာ ခေတ်တာ' },
  { key: 'mm-myanmar-taunggyi', family: 'Myanmar Taunggyi', label: 'တောင်ကြီး' },
]
