import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="w-full flex items-center justify-center bg-black text-gray-700 shadow-lg">
        <div className="container-fluid w-4/6 flex justify-evenly items-center ">
          <div className="">
            <Link to="/">
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Petfinder_logo.png"
                className="w-36 h-28 cursor-pointer"
              />
            </Link>
          </div>
          <div id="links">
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/animalList"
            >
              Get A Pet
            </Link>
          </div>
          <div id="links">
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/organizationList"
            >
              Partners
            </Link>
          </div>
          <div id="links">
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/Addpet"
            >
              Add pet
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
