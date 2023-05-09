import React from "react";
// import logo from "public/fxiqfooter.png";
// import twitter from "public/twitter.png";
// import linkedin from "public/linkedin.png";

export default function Footer() {
  return (
    <div className="bg-[#2a3a68]">
      <div className="flex justify-center mt-4 p-2">
        <div className="text-center text-white">Terms and Conditions</div>
        <div className="ml-2 mr-2 bg-white w-0.5 md:h-5"></div>
        <div className="text-center text-white">Privacy Policy</div>
      </div>
      <div className="flex justify-center mt-2 p-2 space-x-6">
        <a
          href="https://www.linkedin.com/in/motunrayo-odusina-21a290168/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../images/linkedin.png"
            alt="linkedin"
            className="w-6 h-6 cursor-pointer hover:opacity-25"
          />
        </a>
        <a href="https://twitter.com/mospakles" target="_blank" rel="noreferrer">
          <img
            src="../images/twitter.png"
            alt="twitter"
            className="w-6 h-6 cursor-pointer hover:opacity-25"
          />
        </a>
        <a href="https://github.com/mospakles" target="_blank" rel="noreferrer">
          <img
            src="../images/github.png"
            alt="github"
            className="w-6 h-6 rounded-full cursor-pointer hover:opacity-25"
          />
        </a>
      </div>
      <h1 className="text-center text-white mt-2 p-2 pb-3">
        © Motunrayo Odusina 2023 All Rights Reserved
      </h1>
    </div>
  );
}
