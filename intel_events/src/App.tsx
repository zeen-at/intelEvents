import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/user";
import Events from "./pages/user/events";
import CreateEvent from "./pages/user/createEvent";
import EditEvent from "./pages/user/editEvent";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/events" element={<Events />} />
        <Route path="/user/create_event" element={<CreateEvent />} />
        <Route path="/user/editEvent/:eventId" element={<EditEvent />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
