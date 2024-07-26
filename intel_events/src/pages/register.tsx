import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { Formik } from "formik";
import { SignupSchema } from "../utils/validation";
import { IRegister } from "../types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { toast } from "react-toastify";

const Register = () => {
  const form = {
    name: "",
    email: "",
    password: "",
  };

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignUp = async (values: IRegister) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      toast.success("Account created successfully!");
      navigate("/login");
      const user = userCredential.user;
    } catch (error: any) {
      console.log(error.code, error.message);
    }
  };

  return (
    <div className="h-screen flex items-center">
      <div className="w-full md:w-2/5 py-10 px-20 text-slate-700 flex flex-col gap-8 md:gap-10">
        <Link to="/">
          <div className="flex items-center">
            <img
              src="./logo.png"
              alt="logo"
              className="w-10 md:w-20 h-20 object-contain"
            />
            <h1 className="text-xl md:text-3xl text-orange-700 font-bold">
              IntelEvents
            </h1>
          </div>
        </Link>

        <p className="text-lg font-bold md:text-2xl md:font-semibold">
          Seamlessly manage your events, from scheduling to promotion, all in
          one place.
        </p>
        <p>Welcome! Please enter your details.</p>
        <Formik
          initialValues={form}
          validationSchema={SignupSchema}
          onSubmit={handleSignUp}
        >
          {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
            <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
              <CustomInput
                name="name"
                placeholder="Name"
                value={values.name}
                handleChange={handleChange}
                type="text"
                handleBlur={handleBlur}
                error={errors.name}
              />
              <CustomInput
                name="email"
                placeholder="Email"
                value={values.email}
                handleChange={handleChange}
                type="email"
                handleBlur={handleBlur}
                error={errors.email}
              />
              <CustomInput
                name="password"
                placeholder="Password"
                value={values.password}
                handleChange={handleChange}
                type="password"
                handleBlur={handleBlur}
                error={errors.password}
              />
              <CustomButton type="submit" title="Sign Up" />
            </form>
          )}
        </Formik>
      </div>
      <img
        src="./registerBg.jpg"
        alt="registerBg_img"
        className="hidden md:block w-3/5 h-[100vh] object-cover"
      />
    </div>
  );
};

export default Register;
