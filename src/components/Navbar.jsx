import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">GaamBara</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Mahadev</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
