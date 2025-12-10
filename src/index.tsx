import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// App.tsx
import './styles/index.scss';


import App from '@app';

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);