import React, { useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import toast from "react-hot-toast";

const Product_Card = () => {
  const { id } = useParams();
  const formRef = useRef();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dp, setDp] = useState("");
  const [status, setStatus] = useState("");

  const handleProduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("discount_price", dp);
      formData.append("isActive", status);
      formData.append("menuId", id);

      const addData = await axios.post(
        `${Base_url}product/ProductCard/add`,
        formData,
      );
      if (addData) {
        toast.success(addData.data.message);
        setPrice("");
        setImage(null);
        setDescription("");
        setName("");
        setDp("");
        setStatus("");
        formRef.current.reset();
      } else {
        toast.error(addData.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong");
      } else {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <BreadCrumb title="Product Card" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleProduct} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <input type="hidden" name="menuId" />

            <div>
              <label htmlFor="image">Image </label> <br />
              <input
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                required
                onChange={(e) => setImage(e.target?.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="name">Name</label> <br />
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target?.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label> <br />
              <input
                type="text"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target?.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Price"
              />
            </div>
            <div>
              <label htmlFor="discount_price">Discount Price</label> <br />
              <input
                type="text"
                name="discount_price"
                id="discount_price"
                value={dp}
                onChange={(e) => setDp(e.target?.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Discount Price"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label> <br />
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target?.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
            <div>
              <label htmlFor="isActive">Status</label> <br />
              <select
                name="isActive"
                value={status}
                className="w-full border border-slate-600 p-2"
                onChange={(e) => setStatus(e.target?.value)}
                id="isActive"
              >
                <option value="">-- Select --</option>
                <option value="true">Active</option>
                <option value="false">InActive</option>
              </select>
            </div>
          </div>
          <div>
            <button className="bg-indigo-500 mt-5 py-2 cursor-pointer rounded-sm w-full">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product_Card;
