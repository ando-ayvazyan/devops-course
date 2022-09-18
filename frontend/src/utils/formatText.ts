const textSeparatorRegex = /:([a-z]+)/g;

/**
 * Format text by setting required parameters like formatText('/user/:userId', { userId: 10 }) -> '/user/10'
 * @param text
 * @param replace
 * @returns String (formatted)
 */
export function formatText(text: string, replace: Record<string, string>): string {
  return text.replace(textSeparatorRegex, (_, slug) => replace[slug] || '');
}
