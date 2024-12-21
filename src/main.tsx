import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TextRangeSelectionProvider } from "./context/TextRangeSelectionContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TextRangeSelectionProvider>
      <App />
    </TextRangeSelectionProvider>
  </StrictMode>
);
