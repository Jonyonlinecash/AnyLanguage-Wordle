import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'd',
  'e',
  'g',
  'h',
  'i',
  'j',
  'k'
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r'
  's',
  't',
  'u',
  'w',
  'x',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
