import { Form, Formik, Field, ErrorMessage } from "formik";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const validateSchema = Yup.object({
  username: Yup.string().required("Username Required"),
  email: Yup.string().email("Invalid Email Format").required("Email Required"),
  password: Yup.string().required("Password Required"),
  countryCode: Yup.number().required("Country Required"),
  mobileNo: Yup.number().required("Mobile Number Required"),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values) => {
    console.log("Form Submitted", values);
  };
  return (
    <div className="flex justify-center items-center relative  h-screen bg-gradient-to-b from-signupGradientT to-signupGradientB">
      <Head>
        <title>Signup | E-commerce</title>
        <link rel="icon" href="/img/logo/logo-light-streamline.png" />
      </Head>

      <div className="m-2 p-4 w-auto h-auto bg-white ">
        <div className="text-4xl font-bold text-center my-6">Sign Up</div>
        <div className="text-2xl font-medium text-center my-8">
          Create your account
        </div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            countryCode: "",
            mobileNo: "",
          }}
          validateSchema={validateSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col mx-6">
            <div className="my-2 ">
              <label className="text-base font-normal" htmlFor="username">
                Username
              </label>
              <Field
                className="border outline-none p-2 w-full my-2"
                autoComplete="off"
                type="username"
                name="username"
                id="username"
                placeholder="Username"
              />
              <ErrorMessage name="username" />
            </div>
            <div className="my-2 ">
              <label className="text-base font-normal " htmlFor="email">
                Email
              </label>
              <Field
                className="border outline-none p-2 w-full my-2"
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" />
            </div>
            <div className="my-2 ">
              <label className="text-base font-normal ">Mobile Number</label>
              <div className="flex justify-between items-center">
                <Field
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                    appearance: "none !important",
                  }}
                  className="border outline-none p-2 w-1/6 my-2"
                  autoComplete="off"
                  type="number"
                  name="countryCode"
                  id="countryCode"
                  placeholder="CC"
                />
                <Field
                  className="border outline-none p-2 w-5/6 my-2 ml-2 appearance-none"
                  autoComplete="off"
                  type="number"
                  name="mobileNo"
                  id="mobileNo"
                  placeholder="Mobile Number"
                />
              </div>

              <ErrorMessage name="mobileNo" />
            </div>
            <div className="my-2 ">
              <label className="text-base font-normal my-2" htmlFor="password">
                Password
              </label>
              <div className="flex justify-between items-center border my-2">
                <Field
                  className=" outline-none p-2 w-full "
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <label
                  onClick={() => setShowPassword(!showPassword)}
                  class=" text-gray-700 rounded px-2 py-1  cursor-pointer "
                  for="toggle"
                >
                  {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </label>
              </div>
              <ErrorMessage name="password" />
            </div>
            <button
              className="w-full bg-commonGreen text-white font-medium text-base my-4 p-2 hover:opacity-75"
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
        <div className="flex justify-center items-center">
          <div className="m-2">
            <FcGoogle />
          </div>
          <div className="m-2">
            <Link
              className="hover:text-blue-400 font-light text-base"
              href="/auth/signup"
            >
              Signup with Google
            </Link>
          </div>
        </div>
        <div className="font-normal text-center my-4">
          Already have an account?{"  "}
          <Link
            className="hover:text-blue-400 text-commonGreen text-base"
            href="/auth/signin"
          >
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
