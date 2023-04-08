import { Form, Formik, Field, ErrorMessage } from "formik";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const validateSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Email Required"),
  password: Yup.string().required("Password Required"),
});

const SignIn = () => {
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
        <div className="text-4xl font-bold text-center my-6">Sign In</div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validateSchema={validateSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col mx-6">
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
              Sign In
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
              Signin with Google
            </Link>
          </div>
        </div>
        <div className="font-normal text-center my-4">
          Not SignUp Yet?{"  "}
          <Link
            className="hover:text-blue-400 text-commonGreen text-base"
            href="/auth/signup"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
