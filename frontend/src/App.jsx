import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Header from "./component/Header";
import Footer from "./component/Footer";
import WebsiteLayout from "./component/WebsiteLayout";
import Login from "./Pages/Login";
import AdminLayout from "./component/Admin/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./component/Admin/ProtectedRoute";
import PublicRoute from "./component/Admin/PublicRoute";
import Setting from "./Pages/Admin/Setting";
const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<Index />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
