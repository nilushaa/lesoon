import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Basket from "./pages/Basket";
// boshqa sahifalar...

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            {/* boshqa sahifalar */}
          </Routes>
        </MainLayout>
      </Router>
    </GlobalProvider>
  );
}
