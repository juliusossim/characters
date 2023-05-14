import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from "twin.macro";
import App from "./app";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
