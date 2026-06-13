import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Base_url } from "../constant/constant";
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
      <div className="">Index</div>
      {sliderState.map((slider) => (
        <div key={slider._id}>
          <h2>{slider.text}</h2>
          <img src={`${Base_url}${slider.image}`} alt="slider" width="200" />
        </div>
      ))}

      {/*  =================== Teams section start  ===================== */}
      {teamState.map((items, index) => (
        <div key={index}>
          <h4>{items.designation}</h4>
        </div>
      ))}
      {/*  =================== Teams section end ========================== */}

      {/*  =================== Gallery section Start ========================== */}
      {galleryState.map((items, index) => (
        <div key={index}>
          <img
            src={`${Base_url}${items.image.replace(/\\/g, "/")}`}
            alt="gallery"
          />
        </div>
      ))}
      {/*  =================== Gallery section end ========================== */}

      {/*  =================== Blog section Start ========================== */}
      {blogState.map((items, index) => (
        <div key={index}>
          <p>{items.title}</p>
        </div>
      ))}
      {/*  =================== Blog section End ========================== */}

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
