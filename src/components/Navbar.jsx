import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LightMode } from "../Context/lightMode";
import * as Icon from 'react-feather';



export default function Navbar() {
  const [show, setShow] = useState(false);
  const { isLight, setIsLight } = useContext(LightMode);

  function Menu() {
    const defaultClassName = `md:mx-5 relative after:right-0 md:p-0 cursor-pointer  py-1 ${isLight ? 'text-PrimaryBg animation-hvrlight ' : 'text-primaryTextWhite animation-hvrdark '} `;
    return (
      <div
        className={`md:relative text-lg font-Poppins md:flex-row md:bg-opacity-0 md:p-0 md:border-none md:flex text-primaryTextWhite ${show ? "flex " : "hidden"} ${isLight ? 'bg-primaryTextWhite ring-1' : 'bg-PrimaryBg '} md:ring-0  p-5 absolute  flex-col top-[100%] right-10 rounded-lg `}
      >
        <Link to={"/"} className={defaultClassName}>
          Home
        </Link>
        <Link to={"/About"} className={defaultClassName}>
          About
        </Link>
        <Link to={"/Project"} className={defaultClassName}>
          Project
        </Link>
        <Link to={"/Contact"} className={defaultClassName}>
          Contact
        </Link>
      </div>
    );
  }

  return (
    <div className={`flex tracking-[2px] z-50 fixed w-full items-center lg:justify-around justify-between p-5 ${isLight ? ' bg-primaryTextWhite' : ' bg-PrimaryBg'}`}>
      <h1 className="text-2xl  font-Poppins font-bold ">Portofolio</h1>
      <Menu></Menu>
      <div className="flex">
        <span className={`p-2 w-16 md:m-0 cursor-pointer mr-10 border border-black rounded-full`} onClick={() => setIsLight(!isLight)}>
          <div className={`w-6 rounded-full ring-PrimaryBg  transition duration-500 ${isLight ? "translate-x-[100%] bg-primaryLight" : "bg-primaryBgBtn"}`}>
          {
            isLight ? 
            <Icon.Sun width={20} className="m-auto"/>
            :
            <Icon.Moon width={20} className="m-auto"/>
          }
          </div>
        </span>
        <div className={`${show ? "ham-active" : ""} block m-auto cursor-pointer md:hidden`} onClick={() => setShow(!show)}>
          <span className={`${isLight ? 'ham-linelight' : 'ham-linedark'} origin-bottom-left transition duration-300 ease-in-out `}></span>
          <span className={`${isLight ? 'ham-linelight' : 'ham-linedark'}  transition duration-300 ease-in-out `}></span>
          <span className={`${isLight ? 'ham-linelight' : 'ham-linedark'} origin-bottom-left transition duration-300 ease-in-out `}></span>
        </div>
      </div>
    </div>
  );
}
