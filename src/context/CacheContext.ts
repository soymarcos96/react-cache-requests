import { createContext } from "react";

type CacheValue = {
  cache: Set<string>;
  setCache: React.Dispatch<React.SetStateAction<Set<string>>>;
};

export const CacheContext = createContext<CacheValue | null>(null);