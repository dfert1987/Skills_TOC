import React from "react";
import App from "./App";
import Table from "./Components/TablePage/Table";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </AnimatePresence>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
