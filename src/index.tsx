import "@/app/styles/main.css";

import { createRoot } from "react-dom/client";

import App from "@/app/App";

const element = document.getElementById("app");
const root = createRoot(element as Element);

root.render(<App dataset={element?.dataset} />);
