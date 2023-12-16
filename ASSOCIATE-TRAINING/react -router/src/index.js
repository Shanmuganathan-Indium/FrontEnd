import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // <MemoryRouter
  //   // initialEntries={["/", "/mobiles", "/laptops", "/accessories", "/about"]}
  //   // initialIndex={2}
  // >
  //   <App />
  // </MemoryRouter>

  // <HashRouter>
  //   <App/>
  // </HashRouter>
);