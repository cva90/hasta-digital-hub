
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

const isGitHubPages =
  window.location.hostname === "cva90.github.io";

const isLocalProjectPath =
  window.location.pathname.startsWith("/hasta-digital-hub");

const basename =
  isGitHubPages || isLocalProjectPath
    ? "/hasta-digital-hub"
    : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
