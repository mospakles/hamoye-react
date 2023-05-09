import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/dashboard");
          toast.success("Logged In Successfully");
        }
      );
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        toast.error("Please check your password");
      }
      if (err.code === "auth/user-not-found") {
        toast.error("Please check your email address");
      }
    }
  };

  return (
    <>
      <section className="h-screen bg-gradient-to-r from-cyan-900 to-blue-950">
        <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
          <div className="block bg-[#e9f5ff] shadow-2xl rounded-2xl w-3/5 md:w-2/5 h-[70vh] sm:mt-10">
            <div className="">
              <div className="px-4 md:px-0">
                <div className="p-4 mx-6">
                  <button className="text-[#5c96c2] hover:text-[#2b5677] border-2 border-black p-2 border-dashed bg-[#d6e7f4] hover:bg-[#bbd3ea] text-left text-md font-bold py-3">
                    HAMOYE
                  </button>
                  <div className="text-center">
                    <div className="text-2xl font-bold mt-8 mb-8 text-[#1A2F67]">
                      Login To Proceed
                    </div>
                  </div>
                  <form onSubmit={handleLogin}>
                    <div className="mb-5">
                      <label
                        className="p-3 text-lg font-medium mb-2"
                        htmlFor="email-address"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none"
                        placeholder="Enter Your Email Address"
                        name="email-address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="p-3 text-lg font-medium mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control block w-full px-3 py-2 text-base font(-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none"
                        placeholder="Enter Your Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="text-center pt-1 pb-1">
                      <button
                        className="bg-[#1A2F67] inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded-xl shadow-xl hover:bg-blue-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out lg:w-2/5 sm:w-full mt-4"
                        type="submit"
                      >
                        Login
                      </button>
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
                        theme="light"
                      />
                    </div>
                  </form>
                  <p className="mt-4 text-center text-lg">
                    Don't have an account?
                    <NavLink
                      to="/register"
                      className="text-red-600 p-3 hover:text-red-400 "
                    >
                      Register
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
