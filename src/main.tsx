import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CacheProvider } from "./context/CacheProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider>
      <App />
    </CacheProvider>
  </StrictMode>
);
