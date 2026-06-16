import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Index from "./Pages/Index";
import Header from "./component/Header";
import Footer from "./component/Footer";
import WebsiteLayout from "./component/WebsiteLayout";
import AdminLayout from "./component/Admin/AdminLayout";
import ProtectedRoute from "./component/Admin/ProtectedRoute";
import PublicRoute from "./component/Admin/PublicRoute";
const Login = lazy(() => import("./Pages/Login"));
const Dashboard = lazy(() => import("./Pages/Admin/Dashboard"));
const Setting = lazy(() => import("./Pages/Admin/Setting"));
const Menu = lazy(() => import("./Pages/Admin/Menu"));
const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
        }
      >
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
              <Route path="menu" element={<Menu />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
