import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Base_url } from "../constant/constant";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  const location = useLocation(); //location is a object
  const [sliderState, setSliderState] = useState([]);
  const [teamState, setTeamState] = useState([]);
  const [galleryState, setGalleryState] = useState([]);
  const [blogState, setBlogState] = useState([]);
  const [faqState, setFaqState] = useState([]);
  const [testimonialState, setTestimonialState] = useState([]);
  const getId = async () => {
    try {
      const [
        menuIdRes,
        sliderRes,
        teamRes,
        galleryRes,
        blogRes,
        faqRes,
        testRes,
      ] = await Promise.all([
        axios.post(`${Base_url}menu${location.pathname}`),
        axios.get(`${Base_url}slider/get`),
        axios.get(`${Base_url}team/get`),
        axios.get(`${Base_url}gallery/get`),
        axios.get(`${Base_url}blog/get`),
        axios.get(`${Base_url}faq/get`),
        axios.get(`${Base_url}testimonial/get`),
      ]);

      const menuId = menuIdRes.data.data._id;
      const sliders = sliderRes.data.data;
      const teams = teamRes.data.data;
      const gallery = galleryRes.data.data;
      const blog = blogRes.data.data;
      const faq = faqRes.data.data;
      const testimonial = testRes.data.data;

      const matchedSliders = sliders.filter(
        (item) => item.menuId.toString() === menuId.toString(),
      );

      const matchesTeams = teams.filter(
        (item) => item.menuId.toString() === menuId.toString(),
      );

      const matchesGallery = gallery.filter(
        (item) => item.menuId.toString() === menuId.toString(),
      );

      const matchesBlog = blog.filter(
        (item) => item.menuId.toString() === menuId.toString(),
      );

      const matchesFaq = faq.filter(
        (item) => item.menuId.toString() === menuId.toString(),
      );

      const matchesTestimonial = testimonial.filter(
        (item) => item.menuId.toString() === menuId.toString(),
      );

      setSliderState(matchedSliders || null);
      setTeamState(matchesTeams || null);
      setGalleryState(matchesGallery || null);
      setBlogState(matchesBlog || null);
      setFaqState(matchesFaq || null);
      setTestimonialState(matchesTestimonial || null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getId();
  }, [location.pathname]);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="mb-4 md:mb-8"
      >
        {sliderState.map((slider) => (
          <SwiperSlide className="relative">
            <div className="bg-black/50 inset-0 absolute"></div>
            <div key={slider._id}>
              <img
                src={`${Base_url.replace("/api/", "/")}${slider.image.replace("/\\/g", "/")}`}
                alt="slider"
                className="w-full h-110 object-cover object-top"
              />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 md:w-[65%]">
                <h2 className="text-2xl heading-text md:text-3xl lg:text-5xl xl:text-5xl text-white">
                  {slider.heading}
                </h2>
                <p className="text-white my-4 heading-text text-lg ">
                  {slider.subtitle}
                </p>
                <Link
                  to=""
                  className="bg-yellow-500 px-4 md:px-6 py-3 rounded-sm"
                >
                  {slider.slug}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  =================== Gallery section Start ========================== */}
      <div className="container mx-auto">
        {galleryState && galleryState.length > 0 && (
          <div>
            <h2 className="heading-text text-2xl mb-5 font-semibold md:text-3xl lg:text-5xl">
              Our Gallery
            </h2>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-8 gap-5">
          {galleryState.map((items, index) => (
            <div key={index} className="border border-slate-300 shadow-lg p-2">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={`${Base_url.replace("/api/", "/")}${items.image.replace(/\\/g, "/")}`}
              >
                <img
                  src={`${Base_url.replace("/api/", "/")}${items.image.replace(/\\/g, "/")}`}
                  alt="gallery"
                  className="h-86 w-full object-cover object-top"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/*  =================== Gallery section end ========================== */}

      {/*  =================== Blog section Start ========================== */}
      {blogState.map((items, index) => (
        <div key={index}>
          <p>{items.title}</p>
        </div>
      ))}
      {/*  =================== Blog section End ========================== */}

      {/*  =================== Teams section start  ===================== */}

      <div className="container mx-auto">
        {teamState && teamState.length > 0 && (
          <div>
            <h2 className="heading-text text-2xl mt-20 mb-5 font-semibold md:text-3xl lg:text-5xl">
              Our Team Members
            </h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-8 gap-5">
          {teamState.map((items, index) => (
            <div
              key={index}
              className="border p-1 border-slate-300 rounded-t-xl"
            >
              <div>
                <img
                  src={`${Base_url.replace("/api/", "/")}${items.image.replace("/\\/g", "/")}`}
                  className="h-74 w-full object-cover object-top"
                  alt=""
                />
              </div>
              <div className="my-2">
                <h4 className="text-center font-semibold">{items.name}</h4>
                <p className="text-center">{items.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  =================== Teams section end ========================== */}

      {/*  =================== Testimonial section Start ========================== */}
      {testimonialState.map((items, index) => (
        <div key={index}>
          <p>{items.description}</p>
        </div>
      ))}
      {/*  =================== Testimonial section End ========================== */}

      {/*  =================== Frequently Asked question section Start ========================== */}
      {faqState.map((items, index) => (
        <div key={index}>
          <p>{items.title}</p>
        </div>
      ))}
      {/*  =================== Frequently Asked question section End ========================== */}

      <div></div>
    </div>
  );
};

export default Index;
