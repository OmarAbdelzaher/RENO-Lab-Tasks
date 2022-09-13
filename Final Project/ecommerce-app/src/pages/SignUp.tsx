import React from "react";
import { useFormik } from "formik";
import "../assets/css/forms.css";
import { Link } from "react-router-dom";

const validate = (values: any) => {
  const errors = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length > 30) {
    errors.fullName = "Must be 30 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)
  ) {
    errors.password = "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (
    values.confirmPassword !== values.password
  ) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};

export const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
    },
  });
  
  function handleSubmit(values: any, e: any) {
    e.preventDefault();
    console.log(values);
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={(e)=> handleSubmit(formik.values, e)} className="sign-form shadow-lg">
          <div className="form-header">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up
            </h1>
          </div>
          <div>
            <input
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.fullName ? (
              <div className="text-danger-500">{formik.errors.fullName}</div>
            ) : null}
          </div>

          <div>
            <input
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.email ? <div className="text-danger-500">{formik.errors.email}</div> : null}
          </div>

          <div>
            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.password ? (
              <div className="text-danger-500">{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <input
              placeholder="Confrim Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.confirmPassword ? (
              <div className="text-danger-500">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="mt-5 w-full text-white bg-secondary-400 hover:bg-secondary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create Account
          </button>
          <p className="text-sm mt-3">
            By signing up, you agree to our the <Link to="#" className="underline">Terms of Service</Link> and <Link to="#" className="underline">Privacy Policy</Link>
          </p>
        </form>

        <div className="have-account">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
