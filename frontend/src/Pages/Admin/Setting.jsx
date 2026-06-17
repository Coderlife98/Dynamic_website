import React, { useEffect, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import axios from "axios";
import { Base_url, Base_url_img } from "../../constant/constant";

const Setting = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  const [facebook, setFacebook] = useState();
  const [instagram, setInstagram] = useState();
  const [twitter, setTwitter] = useState();
  const [youtube, setYoutube] = useState();
  const [loading, setLoading] = useState(false);
  const [linkdin, setLinkdin] = useState();
  const [logo, setLogo] = useState();
  const [favicon, setFavicon] = useState();
  const [logoPreview, setLogoPreview] = useState("");
  const [faviconPreview, setFaviconPreview] = useState("");
  const getData = async () => {
    try {
      const response = await axios.get(`${Base_url}company/get`);
      if (response) {
        setName(response?.data?.data?.[0]?.name);
        setEmail(response?.data?.data?.[0]?.email);
        setAddress(response?.data?.data?.[0]?.address);
        setMobile(response?.data?.data?.[0]?.mobile);
        setFacebook(response?.data?.data?.[0]?.facebook);
        setInstagram(response?.data?.data?.[0]?.instagram);
        setTwitter(response?.data?.data?.[0]?.twitter);
        setYoutube(response?.data?.data?.[0]?.youtube);
        setLinkdin(response?.data?.data?.[0]?.linkdin);
        setLogo(response?.data?.data?.[0]?.logo);
        setLogoPreview(
          `${Base_url_img}${response?.data?.data?.[0]?.logo?.replace(/\\/g, "/")}`,
        );

        setFavicon(response?.data?.data?.[0]?.favicon);
        setFaviconPreview(
          `${Base_url_img}${response?.data?.data?.[0]?.favicon?.replace(/\\/g, "/")}`,
        );
      }
      // console.log(logo);
      // console.log(favicon);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("mobile", mobile);
      formData.append("facebook", facebook);
      formData.append("instagram", instagram);
      formData.append("twitter", twitter);
      formData.append("youtube", youtube);
      formData.append("linkdin", linkdin);
      formData.append("logo", logo);
      formData.append("favicon", favicon);
      const response = await axios.patch(
        `${Base_url}company/basic_detail`,
        formData,
      );
      // if(response){

      // }
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Setting";
  }, []);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      <BreadCrumb title="Setting" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Company Setting
          </h2>
        </div>
        <form onSubmit={handleUpdate} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 lg:grid-cols-3">
            <div>
              <label htmlFor="name">Company Name</label> <br />
              <input
                type="text"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile No</label> <br />
              <input
                type="text"
                value={mobile}
                id="mobile"
                onChange={(e) => setMobile(e.target.value)}
                name="mobile"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Mobile No"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="address">Address</label> <br />
              <input
                type="text"
                value={address}
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Address"
              />
            </div>
            <div>
              <label htmlFor="facebook">Facebook Id</label> <br />
              <input
                type="text"
                name="facebook"
                id="facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Facebook Id"
              />
            </div>
            <div>
              <label htmlFor="twitter">Twitter Id</label> <br />
              <input
                type="text"
                name="twitter"
                id="twitter"
                onChange={(e) => setTwitter(e.target.value)}
                value={twitter}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Twitter Id"
              />
            </div>
            <div>
              <label htmlFor="instagram">Instagram Id</label> <br />
              <input
                type="text"
                name="instagram"
                id="instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Instagram Id"
              />
            </div>
            <div>
              <label htmlFor="linkdin">Linkedin Id</label> <br />
              <input
                type="text"
                value={linkdin}
                name="linkdin"
                id="linkdin"
                onChange={(e) => setLinkdin(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Linkedin Id"
              />
            </div>
            <div>
              <label htmlFor="youtube">Youtube Link</label> <br />
              <input
                type="text"
                name="youtube"
                value={youtube}
                id="youtube"
                onChange={(e) => setYoutube(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Youtube Link"
              />
            </div>
            <div>
              <label htmlFor="logo">Logo</label> <br />
              <input
                type="file"
                name="logo"
                id="logo"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setLogo(file);
                  setLogoPreview(URL.createObjectURL(file));
                }}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              />
              <div>
                <a href={logoPreview} target="_blank">
                  <img src={logoPreview} className="w-20 mt-3" alt="" />
                </a>
              </div>
            </div>
            <div>
              <label htmlFor="favicon">Favicon</label> <br />
              <input
                type="file"
                name="favicon"
                id="favicon"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFavicon(file);
                  setFaviconPreview(URL.createObjectURL(file));
                }}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Mobile No"
              />
              <div>
                <a href={faviconPreview} target="_blank">
                  <img src={faviconPreview} className="w-20 mt-3" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <button
              disabled={loading}
              className="bg-indigo-500 mt-5 py-2 cursor-pointer rounded-sm w-full"
            >
              {loading ? "Updating ..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
