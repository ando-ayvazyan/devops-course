import { apiUrl } from '../constants';
import { RequestMethodEnum } from '../enum/api';

/**
 * Util function to make http requests based on window.fetch api.
 * @param endpoint
 * @param method
 * @param params
 * @returns
 */
export async function request(endpoint: string, method = RequestMethodEnum.get, params?: RequestInit) {
  let result;
  const urlObj = new URL(endpoint, apiUrl);
  const config = {
    ...params,
    headers: {
      ...params?.headers,
      'Content-Type': 'application/json'
    },
    method
  };

  try {
    const response = await fetch(urlObj.href, config);

    if (response.ok) {
      result = await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.error(err);
  }

  return result;
}
