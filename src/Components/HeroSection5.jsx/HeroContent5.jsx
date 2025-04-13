import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Page5 from "../pages/Page5";
import logo from "/imgs/avatar.png";
const HeroContent = () => {
  return (
    <div className=" w-full bg-[#f0f4f9] overflow-hidden min-h-screen h-full ">
      <div className="head p-4  bg-white flex justify-between items-center  ">
        <div className="search relative ">
          <FontAwesomeIcon
            className=" z-1 translate-x-8 items-center  max-sm:invisible"
            color="black"
            icon={faMagnifyingGlass}
          />
          <input
            className="p-2 border-[2px]  border-[#cacaca] pl-9 rounded-lg bg-white focus:placeholder:text-transparent outline-none focus:border-gray-400 w-[11rem] focus:w-[12rem] duration-300 transition-all  text-black"
            type="serach"
            placeholder="type a keyword"
          />
        </div>
        <div className="icons flex items-center">
          <span className=" notifcation relative">
            <FontAwesomeIcon
              color="red "
              className="translate-x-4 translate-y-[-1rem]"
              icon={faBell}
            />{" "}
          </span>

          <img className="w-10 ml-4" src={logo} alt="no img" />
        </div>
      </div>
      <Page5></Page5>
    </div>
  );
};

export default HeroContent;
