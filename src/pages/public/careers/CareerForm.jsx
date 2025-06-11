import { Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";

// Validation Schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^\d{10}$/, "Mobile must be 10 digits"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  file: yup
    .mixed()
    .required("Resume is required")
    .test("fileSize", "File too large", (value) => {
      return value && value.length > 0 && value[0]?.size <= 2 * 1024 * 1024; // 2MB
    }),
  position: yup.string().required("Position is required"),
  message: yup.string().required("Message is required"),
});

const CareerForm = () => {
  const axios = useAxios();
  const [isLoad, setIsLoad] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('mobile', data.mobile);
      formData.append('email', data.email);
      formData.append('position', data.position);
      formData.append('message', data.message);
      formData.append('file', data.file[0]);
      setIsLoad(true);

      // const response = await axios.postForm("http://localhost:3000/career.php", formData);
      const response = await axios.postForm('/career.php', formData);
      if (response.status === 200 || response.status === 201) {
        console.log("Form Submitted", response.data);
        setIsLoad(false);
        reset();
        toast.success('Thank you for applying! We’ve received your details and will be in touch soon.', {
          autoClose: 1500,
          position: 'top-center'
        });
      }
    } catch (error) {
      toast.error("Internal server error.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* Image Section */}
      <section className="w-full">
        <img
          src="/images/career-image.png"
          alt="career-img"
          className="w-full h-auto"
        />
      </section>

      {/* Form Section */}
      <section className="w-full bg-white h-full flex flex-col justify-start items-start gap-y-4 py-4 px-0 md:px-5">

        {/* Name & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="w-full">
            <input
              {...register("fullName")}
              placeholder="Full Name"
              className="bg-white w-full border border-gray-400 placeholder:text-gray-700 rounded-sm px-3 py-2 outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              {...register("mobile")}
              placeholder="Mobile"
              className="bg-white w-full border border-gray-400 placeholder:text-gray-700 rounded-sm px-3 py-2 outline-none"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="w-full">
          <input
            {...register("email")}
            placeholder="Email"
            className="bg-white w-full border border-gray-400 placeholder:text-gray-700 rounded-sm px-3 py-2 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* File Upload */}
        <div className="w-full">
          <input
            type="file"
            onChange={(e) => setValue("file", e.target.files)}
            className="bg-white w-full border border-gray-400 placeholder:text-gray-700 rounded-sm px-3 py-2 outline-none"
          />
          {errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
        </div>

        {/* Position */}
        <div className="w-full">
          <input
            {...register("position")}
            placeholder="Position Applied For"
            className="bg-white w-full border border-gray-400 placeholder:text-gray-700 rounded-sm px-3 py-2 outline-none"
          />
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="w-full">
          <textarea
            {...register("message")}
            placeholder="Message Here"
            className="bg-white w-full border border-gray-400 placeholder:text-gray-700 rounded-sm px-3 py-2 outline-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="!capitalize flex justify-center items-center gap-x-2 !bg-[var(--colorOne)] !text-white !rounded-md !py-1.5 !px-4"
        >
          { isLoad ? <CircularProgress color="white" size={14} />: null }
          <span>Send Now</span>
        </Button>
      </section>
    </form>
  );
};

export default CareerForm;
