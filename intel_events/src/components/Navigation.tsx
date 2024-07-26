import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between px-5 md:px-20 py-10">
      <Link to="/">
        <div className="flex items-center">
          <img
            src="./logo.png"
            alt="logo"
            className="w-10 md:w-20 h-20 object-contain"
          />
          <h1 className="md:text-3xl text-xl text-orange-700 font-bold">
            IntelEvents
          </h1>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button>
          <RiMenuFill />
        </button>
      </div>
      <div className="hidden lg:block">
        <ul className="flex space-x-10 text-slate-500 items-center  ">
          <li className="">
            <Link to="#about">About</Link>
          </li>
          <li className="">
            <Link to="#contact">Contact</Link>
          </li>
          <li className="">
            <Link to="#events">Events</Link>
          </li>
          <li className="">
            <Link
              to="/login"
              className="border border-orange-600 text-orange-600 px-4 py-2 rounded-sm"
            >
              Login
            </Link>
          </li>
          <li className="hover:text-orange-700">
            <Link
              to="/register"
              className="border border-orange-700 bg-orange-700 text-slate-100  px-4 py-2 rounded-sm"
            >
              Create Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
