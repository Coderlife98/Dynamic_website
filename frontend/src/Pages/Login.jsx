import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assests, Base_url } from "../constant/constant.js";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const data = {
        email,
        password,
      };
      const loginHandler = await axios.post(`${Base_url}auth/login`, data);
      localStorage.setItem("token", loginHandler.data.token);
      toast.success(loginHandler.data.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      navigate("/login");
    }
  };
  return (
    <div className="container mx-auto">
      <div className="grid my-5  md:my-18 px-2 md:px-8 md:grid-cols-2 gap-4 md:gap-8">
        <div className="">
          <img src={assests.login_img} alt="" />
        </div>
        <div className="">
          <form
            onSubmit={handleLogin}
            className="border rounded-t-xl border-slate-500 p-4 md:p-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-3">Login Now</h3>
            </div>
            <div className="">
              <div className="flex flex-col">
                <label htmlFor="email">EmailId</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="border  py-1 px-2 mt-2 border-slate-400 active:border-green-400 focus:outline-none"
                  placeholder="Enter EmailId"
                />
              </div>
              <div className="flex my-2 flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  className="border py-1 px-2 mt-2 border-slate-400 active:border-green-400 focus:outline-none"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex my-3 flex-col">
                <button className="bg-black text-white py-2">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
