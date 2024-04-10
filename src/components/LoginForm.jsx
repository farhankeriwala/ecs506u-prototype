/*
Assigned to: Farhan 
Tasks: Create the Login Form as in the design.
*/

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { authentication } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email Address Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password Required";
  }
  return errors;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    // Use useFormik hook
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        await signInWithEmailAndPassword(
          authentication,
          values.email,
          values.password
        );

        resetForm();
        navigate("/dashboard", { replace: true });
      } catch (error) {
        console.log(error.message);
        setError("Invalid Email or Password");
      } finally {
        setLoading(false);
      }
    },
  });

  const logout = async () => {
    try {
      await signOut(authentication);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-8 w-full md:w-[750px] p-10 bg-white rounded-[32px]"
    >
      <h1 className="font-Roboto text-xl md:text-3xl text-matteBlack text-center">
        Login to your Dashboard
      </h1>
      {error && (
        <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
          <i className="bx bx-error-circle"></i>
          {error}
        </span>
      )}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your Email Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
      />
      {formik.touched.email && formik.errors.email && (
        <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
          <i className="bx bx-error-circle"></i>
          {formik.errors.email}
        </span>
      )}
      <input
        id="pwd"
        name="password"
        type="password"
        placeholder="Enter Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
      />
      {formik.touched.password && formik.errors.password && (
        <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
          <i className="bx bx-error-circle"></i>
          {formik.errors.password}
        </span>
      )}
      <button
        type="submit"
        disabled={loading} // Disable button when loading
        className=" w-full h-12 border-2 border-royalPurple m-2 rounded-full font-Nunito text-lg md:text-xl text-matteBlack hover:text-white hover:bg-royalPurple transition-colors duration-300"
      >
        {loading ? ( // Show loading spinner if loading
          <LoadingSpinner />
        ) : (
          <span className="flex items-center gap-2 text-center justify-center">
            Login
            <i className="bx bx-log-in"></i>
          </span>
        )}
      </button>
      <button
        onClick={logout}
        type="button" // Change type to button
        className="w-full h-12 border-2 border-royalPurple m-2 rounded-full font-Nunito text-lg md:text-xl text-matteBlack hover:text-white hover:bg-royalPurple transition-colors duration-300"
      >
        <span className="flex items-center gap-2 text-center justify-center">
          Logout
          <i className="bx bx-log-in"></i>
        </span>
      </button>
    </form>
  );
};

export default LoginForm;
