export const t9_chars = [
  '', // 0
  '', // 1
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz'
];

// regexp for all non numeric characers(and 0|1) replacement.
// it is replicated on FE side as well.
export const t9_replacementRegexp  = /[^2-9]+/g;
