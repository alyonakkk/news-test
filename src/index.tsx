import "@/app/styles/main.css";

import { createRoot } from "react-dom/client";

import App from "@/app/App";

const root = createRoot(document.getElementById("app") as Element);

root.render(<App />);
