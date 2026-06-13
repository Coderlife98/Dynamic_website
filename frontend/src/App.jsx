import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Header from "./component/Header";
import Footer from "./component/Footer";
import WebsiteLayout from "./component/WebsiteLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
