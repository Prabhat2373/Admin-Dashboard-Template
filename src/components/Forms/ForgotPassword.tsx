import React from "react";
import Logo from "../../illustrations/Logo";
import InputField from "./InputField";
import * as Yup from "yup";
import FORM from "./Form";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
const initialValues = {
    user_email:"",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});
const handleSubmit = (values: any) => {
    console.log(values);
  };
  
const ForgotPassword = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="container flex justify-center items-center border border-solid mx-auto  h-[100vh] ">
          <div className=" w-[30vw]  h-[70vh] bg-white p-8 rounded-md flex  items-center flex-col justify-evenly">
            <Logo />
            <p className="font-bold">RECOVER</p>
            <FORM 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <InputField
              className="w-full bg-primary-bgPrimary"
              label="Email Address"
              type="email"
              name="user_email"
            />

           <Link to="/reset_password" > <Button name="Reset Your Password" varient="primary"  /></Link>
            </FORM>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
