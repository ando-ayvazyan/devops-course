import { DependencyList, useEffect, useState } from 'react';

type UsePromiseResolveResultType<T> = [ T | undefined, boolean, Error? ];

export function usePromiseResolve<ResponceType>(
  promiseFactory: () => Promise<any>,
  deps: DependencyList
): UsePromiseResolveResultType<ResponceType> {
  const [ response, setResponse ] = useState<ResponceType>();
  const [ isLoading, setIsloading ] = useState(false);
  const [ error, setError ] = useState();

  useEffect(() => {
    setIsloading(true);

    promiseFactory()
      .then(setResponse)
      .catch((err: Error) => {
        setError(error);
        console.error(`[ERROR]: ${err.message}`);
      })
      .finally(() => setIsloading(false));
  }, deps);

  return [ response, isLoading, error ];
}
