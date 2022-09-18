/**
 * Creates a debounced function that delays passed function invokation until the delay milliseconds have elapsed
 * since the last time the debounced function was invoked.
 * @param fn
 * @param delay
 * @returns Function (debounced)
 */
export function debounce<T extends (...params: any) => any>(fn: T, delay: number): (...params: Parameters<T>) => any {
  let timeoutId: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(fn, delay, ...args as any);
  };
}
