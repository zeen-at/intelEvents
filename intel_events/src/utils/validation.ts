import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const EventSchema = Yup.object().shape({
  eventName: Yup.string().required("Enter event name"),
  description: Yup.string(),
  date: Yup.date().required("Required"),
  time: Yup.string(),
  location: Yup.string(),
});
