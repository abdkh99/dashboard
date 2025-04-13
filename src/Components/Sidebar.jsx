import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const activeClassName = "bg-[#f6f6f6]";
  return (
    <>
      <div className="sidebar text-black bg-white p-10 relative shadow-2xl w-[220px] max-md:w-[60px]  items- overflow-hidden ">
        <h3
          className="relative text-center mt-0 mb-8 font-serif font-extrabold 
                   before:content[''] before:absolute before:w-1/2 before:h-0.5 before:bottom-[-10px] before:bg-black 
                   after:content[''] after:absolute after:rounded-full after:bg-black after:bottom-[-15px] after:w-3 after:h-3 after:left-1/2 after:translate-x-[-70%]  
                   max-md:text-xs max-md:before:invisible max-md:after:invisible max-md:ml-[-2rem] max-md:text-nowrap "
        >
          ABD KH
        </h3>
        <ul className=" w-full items-center absolute left-0 list-none ">
          <li className="w-full sticky  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `border-gray-50 flex max-md:w-[100%] pl-4 transition-all duration-75 text-black border text-sm rounded-md mb-0.25 py-2 hover:bg-[#eaeaea] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faChartSimple}
              />
              <span className="max-md:invisible">Dashboard</span>
            </NavLink>
          </li>
          <li className="w-full sticky  ">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `border-gray-50 max-md:w-[150%]  flex  pl-4 transition-all duration-75 text-black border text-sm rounded-md items-start mb-0.25 py-2 hover:bg-[#f6f6f6] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faGear}
              />
              <span className="max-md:invisible">Settings</span>
            </NavLink>
          </li>
          <li className="w-full sticky  ">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `border-gray-50 max-md:w-[100%]  flex  px-4 transition-all duration-75 text-black border text-sm rounded-md items-start mb-0.25 py-2 hover:bg-[#f6f6f6] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faUser}
              />
              <span className="max-md:invisible">Profile</span>
            </NavLink>
          </li>
          <li className="w-full sticky  ">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `border-gray-50 max-md:w-[100%]  flex  px-4 transition-all duration-75 text-black border text-sm rounded-md items-start mb-0.25 py-2 hover:bg-[#f6f6f6] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faDiagramProject}
              />
              <span className="max-md:invisible">Project</span>
            </NavLink>
          </li>
          <li className="w-full sticky  ">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `border-gray-50 max-md:w-[100%]  flex  px-4 transition-all duration-75 text-black border text-sm rounded-md items-start mb-0.25 py-2 hover:bg-[#f6f6f6] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faGraduationCap}
              />
              <span className="max-md:invisible">Courses</span>
            </NavLink>
          </li>
          <li className="w-full sticky  ">
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                `border-gray-50 max-md:w-[100%]  flex  px-4 transition-all duration-75 text-black border text-sm rounded-md items-start mb-0.25 py-2 hover:bg-[#f6f6f6] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faUserGroup}
              />
              <span className="max-md:invisible">Friends</span>
            </NavLink>
          </li>
          <li className="w-full sticky  ">
            <NavLink
              to="/files"
              className={({ isActive }) =>
                `border-gray-50 max-md:w-[100%]  flex  px-4 transition-all duration-75 text-black border text-sm rounded-md items-start mb-0.25 py-2 hover:bg-[#f6f6f6] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faFile}
              />
              <span className="max-md:invisible">Files</span>
            </NavLink>
          </li>
          <li className="w-full sticky  ">
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                `border-gray-50 max-md:w-[100%]  flex  px-4 transition-all duration-500 text-black border text-sm rounded-md items-start mb-0.25 py-2 hover:bg-[#f6f6f6] ${
                  isActive ? activeClassName : ""
                }`
              }
            >
              <FontAwesomeIcon
                className="translate-x-[-0.5rem] translate-y-1"
                icon={faBars}
              />
              <span className="max-md:invisible">Plans</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
