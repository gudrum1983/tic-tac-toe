import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// App.tsx
import './styles/main.scss';


import App from "./app/App.tsx";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);