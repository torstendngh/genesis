import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// Fonts
import "./assets/fonts/inter/inter.css";
// Main styles and CSS reset
import "./index.css";
import { DialogProvider } from "./contexts/DialogContext.jsx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DialogProvider>
        <App />
      </DialogProvider>
    </BrowserRouter>
  </StrictMode>
);
