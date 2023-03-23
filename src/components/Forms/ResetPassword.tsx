import React from "react";
import Logo from "../../illustrations/Logo";
import Button from "../Buttons/Button";
import FORM from "./Form";
import InputField from "./InputField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const handleSubmit = (values: any) => {
  console.log(values);
};
const initialValues = {
  currentPassword:"",
  newPassword:"",
  confirmPassword:"",
};
const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Please enter your password.")
    .min(8, "Your password is too short."),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("newPassword")], "Your passwords do not match."),
});
const ResetPassword = () => {
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
              validationSchema={validationSchema}
            >
              <InputField
                className="w-full bg-primary-bgPrimary"
                label="Current Password"
                type="password"
                name="currentPassword"
              />
              <InputField
                className="w-full bg-primary-bgPrimary"
                label="New Password"
                type="password"
                name="newPassword"
              />
              <InputField
                className="w-full bg-primary-bgPrimary"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
              />
              <div className="flex justify-evenly">
                <Button
                  name="Update Password"
                  varient="primary"
                  type="submit"
                />
                <Link to="/forgot_password">
                  {" "}
                  <Button name="Cancel" varient={"danger"} />
                </Link>
              </div>
            </FORM>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
