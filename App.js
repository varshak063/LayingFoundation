import React from "react";
import ReactDOM from "react-dom/client";

// React ELement =>render =>Object=>HTML element
const heading = React.createElement(
  "h1",
  { id: "headings" },
  "Hi Welcome to React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
