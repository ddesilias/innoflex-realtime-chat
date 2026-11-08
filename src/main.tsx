import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = import.meta.env.VITE_CONVEX_URL
  ? new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)
  : null;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {convex ? <ConvexProvider client={convex}><App /></ConvexProvider> : <App />}
  </StrictMode>,
);
