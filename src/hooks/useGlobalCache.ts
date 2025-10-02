import { useContext } from "react";
import { CacheContext } from "../CacheContext";

export const useGlobalCache = () => {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('useGlobalCache needs to be inside CacheProvider!');
  }
  return context;
};
