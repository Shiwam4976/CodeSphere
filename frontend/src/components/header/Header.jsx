import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

const Header = ({ isAuth }) => {
  return (
    <header>
      <Link to={"/"} className="logo">
        <span className="logo-icon">
          <FaGraduationCap />
        </span>
        CodeSphere
      </Link>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;