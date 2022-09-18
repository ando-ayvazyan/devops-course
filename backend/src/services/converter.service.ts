import { t9_chars, t9_replacementRegexp } from '../constants/t9';

/**
 * Converts a given numeric string into a list of corresponding words in the style of T9.
 * @param digits string
 * @returns Array<string>
 */
export function digitsToWords(digits: string): string[] {
  const result: string[] = [];
  const validDigits = digits.replace(t9_replacementRegexp, '');
  const digitsLen = validDigits.length;

  if (!digitsLen) {
    return result;
  }

  const charsList = [ ...validDigits ].map(digit => t9_chars[+digit]);

  function combine(idx: number, word: string) {
    if (word.length === digitsLen) {
      result.push(word);
      return;
    }

    for (const char of charsList[idx]) {
      combine(idx + 1, word + char);
    }
  }

  combine(0, '');

  return result;
}
