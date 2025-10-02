import { createContext } from "react";

// Same as others, need to be typed better
interface CacheContextType {
  cache: Map<string, unknown>;
  fetchData: (url: string) => Promise<unknown>;
  isLoading: boolean;
  error: string | null;
}

export const CacheContext = createContext<CacheContextType | undefined>(undefined);