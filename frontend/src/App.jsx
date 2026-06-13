import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Header from "./component/Header";
import Footer from "./component/Footer";
import WebsiteLayout from "./component/WebsiteLayout";
import Login from "./Pages/Login";
import AdminLayout from "./component/Admin/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Index />} />
          </Route>
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
