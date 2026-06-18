import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Index from "./Pages/Index";
import Header from "./component/Header";
import Footer from "./component/Footer";
import WebsiteLayout from "./component/WebsiteLayout";
import AdminLayout from "./component/Admin/AdminLayout";
import ProtectedRoute from "./component/Admin/ProtectedRoute";
import PublicRoute from "./component/Admin/PublicRoute";
import Add_Menu from "./Pages/Admin/Add_Menu";
import ChildMenu from "./Pages/Admin/ChildMenu";
import Page from "./Pages/Admin/Page";
import Slider from "./Pages/Admin/Slider";
import Hero from "./Pages/Admin/Hero";
import Faq from "./Pages/Admin/Faq";
import News from "./Pages/Admin/News";
import Testimonial from "./Pages/Admin/Testimonial";
import Team from "./Pages/Admin/Team";
import Gallery from "./Pages/Admin/Gallery";
import axios from "axios";
import { Base_url } from "./constant/constant";
const Login = lazy(() => import("./Pages/Login"));
const Dashboard = lazy(() => import("./Pages/Admin/Dashboard"));
const Setting = lazy(() => import("./Pages/Admin/Setting"));
const Menu = lazy(() => import("./Pages/Admin/Menu"));
const App = () => {
  const [favicon, setFavicon] = useState();

  const getFavicon = async () => {
    try {
      const get = await axios.get(`${Base_url}company/getLogo`);
      setFavicon(get.data.data.favicon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavicon();
  }, []);

  useEffect(() => {
    if (favicon) {
      const faviconElement = document.getElementById("favicon");
      if (faviconElement) {
        const path =
          Base_url.replace("/api/", "/") + favicon.replace("/\\/g", "/");
        console.log(path);
        faviconElement.href = path;
      }
    }
  }, [favicon]);

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
              <Route path="add_menu" element={<Add_Menu />} />
              <Route path="child_menu/:id" element={<ChildMenu />} />
              <Route path="page/:id" element={<Page />} />
              <Route path="slider/:id" element={<Slider />} />
              <Route path="hero/:id" element={<Hero />} />
              <Route path="faq/:id" element={<Faq />} />
              <Route path="gallery/:id" element={<Gallery />} />
              <Route path="news/:id" element={<News />} />
              <Route path="testimonial/:id" element={<Testimonial />} />
              <Route path="team/:id" element={<Team />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
