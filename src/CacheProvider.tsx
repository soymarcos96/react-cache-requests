import { useState } from "react";
import { CacheContext } from "./CacheContext";

// Types need to be better here, learning purposes.
export const CacheProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [cache, setCache] = useState(new Map<string, unknown>());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string) => {
    if (cache.has(url)) {
      return cache.get(url);
    }

    try {
      setIsLoading(true);
      setError(null);

      const result = await fetch(url);
      const data = await result.json();

      const newCache = new Map(cache);
      newCache.set(url, data);
      setCache(newCache);

      return data;
    } catch (err) {
      if (error) console.log(err);
      else console.log("default error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CacheContext.Provider value={{ cache, fetchData, isLoading, error }}>
      {children}
    </CacheContext.Provider>
  );
};
