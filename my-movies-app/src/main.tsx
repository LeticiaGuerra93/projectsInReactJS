import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/details";
import Page404 from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
