import React from "react";

import LoginIllustration from "../../illustrations/LoginIllustration";
import Logo from "../../illustrations/Logo";
import FORM from "./Form";
import InputField from "./InputField";
import * as Yup from "yup";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const initialValues = {
  user_email: "",
  user_password: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const handleSubmit = (values: any) => {
  console.log(values);
};

const LoginForm = () => {
  return (
    <>
      <section className="flex-items-center">
        <div className="container mx-auto">
          <div className="grid h-[100vh] lg:grid-cols-[30%_minmax(70%,_1fr)] grid-cols-1">
            <div className=" p-10 flex justify-center items-center flex-col bg-white ">
              <div className="mb-5 ">
                <Logo />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                Login
              </h3>
              <FORM
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <InputField
                  className="w-full bg-primary-bgPrimary"
                  label="Email"
                  type="email"
                  name="user_email"
                />
                <InputField
                  className="w-full  bg-primary-bgPrimary"
                  label="Password"
                  type="password"
                  name="user_password"
                />

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex items-center">
                    <a
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      href="/"
                    >
                      <Link className="text-text-blue" to="/forgot_password">
                      Forgot Password ?
                    </Link>
                    
                    </a>
                  </div>
                </div>

                <Button name="Submit" varient="primary" />

                <div className="flex items-center mt-5 justify-center">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    Don't have an account yet ?{" "}
                    <Link className="text-text-blue" to="/register">
                      Register
                    </Link>
                  </p>
                </div>
              </FORM>
            </div>
            <div className="hidden lg:flex items-center justify-content-center">
              <LoginIllustration />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
