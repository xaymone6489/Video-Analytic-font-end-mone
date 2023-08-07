import React from "react";
import { useForm } from "@refinedev/react-hook-form";
import Menubar from "./Menubar";
export const Login: React.FC = () => {
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSubmits = (data: any) => {};
  return (
    <div>
      <div className="text-white">
        <Menubar />
      </div>
      
        <div className="mx-auto max-w-[1200px] m-10 p-8 rounded-xl shadow-lg bg-slate-900 mb-20">
          {/* <div className="mx-auto w-full max-w-[1000px] mb-20"> */}
            <h1 className="  text-5xl font-bold tracking-tight overline decoration-1 text-sky-500 my-5">
              Login
            </h1>
            <form onSubmit={handleSubmit(handleSubmits)}>
              <div className="mb-5">
                <label className="mb-2 block text-base font-medium text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-base font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="subject"
                  id="subject"
                  placeholder="Enter your Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div>
                <button className="hover:shadow-form rounded-md bg-sky-300 py-2 px-6 text-base font-semibold text-white outline-none hover:bg-sky-500">
                  Submit
                </button>
              </div>
            </form> 
          {/* </div> */}
        </div>
      </div>
    
  );
};
