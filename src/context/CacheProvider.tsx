import React, { useState } from "react";
import { CacheContext } from "./CacheContext";

export const CacheProvider = ({ children }: { children: React.ReactNode }) => {
  const [cache, setCache] = useState<Set<string>>(new Set());

  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      {children}
    </CacheContext.Provider>
  );
};
