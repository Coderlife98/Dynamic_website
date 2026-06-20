import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Index from "./Pages/Index";
import Header from "./component/Header";
import Footer from "./component/Footer";
import WebsiteLayout from "./component/WebsiteLayout";
import AdminLayout from "./component/Admin/AdminLayout";
import ProtectedRoute from "./component/Admin/ProtectedRoute";
import PublicRoute from "./component/Admin/PublicRoute";
import { Base_url } from "./constant/constant";
const Why_choose_us = lazy(() => import("./Pages/Admin/Why_choose_us"));
const Service = lazy(() => import("./Pages/Admin/Service"));
const Product_Card = lazy(() => import("./Pages/Admin/Product_Card"));
const Our_Partner = lazy(() => import("./Pages/Admin/Our_Partner"));
const Contact = lazy(() => import("./Pages/Admin/Contact"));
const Vision = lazy(() => import("./Pages/Admin/Vision"));
const Mission = lazy(() => import("./Pages/Admin/Mission"));
const About = lazy(() => import("./Pages/Admin/About"));
const Background = lazy(() => import("./Pages/Admin/Background"));
const Add_Menu = lazy(() => import("./Pages/Admin/Add_Menu"));
const ChildMenu = lazy(() => import("./Pages/Admin/ChildMenu"));
const Page = lazy(() => import("./Pages/Admin/Page"));
const Slider = lazy(() => import("./Pages/Admin/Slider"));
const Hero = lazy(() => import("./Pages/Admin/Hero"));
const Faq = lazy(() => import("./Pages/Admin/Faq"));
const News = lazy(() => import("./Pages/Admin/News"));
const Testimonial = lazy(() => import("./Pages/Admin/Testimonial"));
const Team = lazy(() => import("./Pages/Admin/Team"));
const Gallery = lazy(() => import("./Pages/Admin/Gallery"));
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
              <Route path="about_us/:id" element={<About />} />
              <Route path="mission/:id" element={<Mission />} />
              <Route path="contact/:id" element={<Contact />} />
              <Route path="our_partner/:id" element={<Our_Partner />} />
              <Route path="vision/:id" element={<Vision />} />
              <Route path="product_card/:id" element={<Product_Card />} />
              <Route path="services/:id" element={<Service />} />
              <Route path="why_choose_us/:id" element={<Why_choose_us />} />
              <Route
                path="background_attachment/:id"
                element={<Background />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
