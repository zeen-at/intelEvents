import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { Formik } from "formik";
import { SignInSchema } from "../utils/validation";
import { ILogin } from "../types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const form = {
    email: "",
    password: "",
  };

  const { setUser } = useContext(AuthContext) || {};
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignIn = async (values: ILogin) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      const user = response.user;
      const token = await user.getIdToken();
      setUser && setUser(user);

      localStorage.setItem("token", token);
      toast.success("Login successful!");

      navigate("/user/dashboard");
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.code, error.message);
    }
  };

  return (
    <div className="h-[screen] flex items-center">
      <img
        src="./loginBg.jpg"
        alt="loginBg_img"
        className="hidden md:block w-3/5 h-[100vh] object-cover"
      />
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
          validationSchema={SignInSchema}
          onSubmit={handleSignIn}
        >
          {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
            <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
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
              <CustomButton type="submit" title="Log In" />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
