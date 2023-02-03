import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Form from "./Form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Form />
  </StrictMode>
);
