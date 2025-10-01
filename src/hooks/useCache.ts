import { useContext } from "react";
import { CacheContext } from "../context/CacheContext";

export const useCache = () => {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('useCache needs to be inside our provider!');
  }
  return context;
};
