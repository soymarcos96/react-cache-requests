import { useState } from "react";

export const useLocalCache = () => {
  const [cache, setCache] = useState<Map<string, Array<unknown>>>(new Map());
  const [error, setError] = useState<Error | unknown | null>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url: string) => {

    if (!cache.has(url)) {
      setIsLoading(true);

      try {
        const results = await fetch(url);
        const data = await results.json();

        const newCache = new Map(cache);
        newCache.set(url, data)
        setCache(newCache)

        return data;
      }
      catch (error) {
        if (error) {
          setError(error);
        } else {
          setError('default error');
        }
      }
      finally {
        setIsLoading(false);
      }
    }
    return cache.get(url);
  }

  return { cache, error, isLoading, fetchData };
};
