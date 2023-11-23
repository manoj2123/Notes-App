import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const navigate = useNavigate();
  const [Cookie, setCookie, removeCookie] = useCookies(["access_token"]);
  const Logout = () => {
    localStorage.removeItem("userID");
    removeCookie("access_token");
    toast.warn("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <>
       <nav className="flex justify-between px-6 py-3 items-center shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">
        <Link to="/home">Notes App</Link>
      </h1>
      <div>
        <button
          onClick={Logout}
          className="flex items-center gap-2 border border-indigo-600 px-3 py-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white"
        >
          <CiLogout className="text-xl" />
          Logout
        </button>
      </div>
    </nav>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Header;
