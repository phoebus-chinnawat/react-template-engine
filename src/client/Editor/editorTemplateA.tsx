import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TemplateA } from "../templates/mui/App";

const business = (window as any).__INITIAL_DATA__.business;
const rootNode = document.getElementById("root");
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
      <App business={business} render={(businessData) => (
        <TemplateA business={businessData} />
      )} />
  );
} else {
  console.error("cannot create root");
}
