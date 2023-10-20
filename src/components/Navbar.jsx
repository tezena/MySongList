import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log(link);
  };

  return (
    <nav className="text-black p-8  ">
      <div className="container  flex justify-between items-center pl-32 w-full">
        <ul className="flex space-x-20 text-lg w-1/2 ">
          <li className="">
            <a
              href="/"
              className={` font-semibold hover:text-yellow-300 `}
              onClick={() => handleLinkClick("Home")}
            >
              <p>Home</p>
              <div
                className={`my-2  h-[4px]  rounded-sm ${
                  activeLink.toString() === "Home" ? "bg-[#F00E59]" : "bg-grey"
                }`}
              ></div>
            </a>
          </li>
          <li className="">
            <a
              href="/about"
              className={`font-semibold hover:text-yellow-300 `}
              onClick={() => handleLinkClick("About Us")}
            >
              <p>Albums</p>
              <div
                className={`my-2  h-[4px]   rounded-sm ${
                  activeLink.toString() === "About Us"
                    ? "bg-[#F00E59]"
                    : "bg-grey"
                }`}
              ></div>
            </a>
          </li>
          <li className="">
            <a
              href="/about"
              className={`font-semibold hover:text-yellow-300 `}
              onClick={() => handleLinkClick("About Us")}
            >
              <p>About Us</p>
              <div
                className={`my-2  h-[4px]   rounded-sm ${
                  activeLink.toString() === "About Us"
                    ? "bg-[#F00E59]"
                    : "bg-grey"
                }`}
              ></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
