import { NavLink } from "react-router-dom";
import {
  FontAwesomeIcon,
  faCode,
  faUser,
  faCheck,
  faCircleNotch,
  faEllipsis,
  faFaceSmile,
  faThumbsUp,
  faTrash,
  faMessage,
  faFacebookF,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "../pages/icons";
// import imaged
import welcome from "../../../public/assets/welcome.png";
import avatar from "../../../public/assets/avatar.png";
import project from "../../../public/assets/project.png";
import news_01 from "../../../public/assets/news-01.png";
import news_02 from "../../../public/assets/news-02.png";
import news_03 from "../../../public/assets/news-03.png";
import news_04 from "../../../public/assets/news-04.png";
// imporf files images
import pdf from "../../../public/assets/pdf.svg";
import avi from "../../../public/assets/avi.svg";
import psd from "../../../public/assets/psd.svg";
import eps from "../../../public/assets/eps.svg";
import zip from "../../../public/assets/zip.svg";
import dll from "../../../public/assets/dll.svg";
const Page1 = () => {
  return (
    <>
      <div>
        <h1 className="heading-h1 fade-in ">Dashboard</h1>
      </div>
      <div
        className=" wrapper text-center text-black grid grid-cols-3 max-md:mx-1
                   lg:mx-4
                   max-xl:grid-cols-1
                   lg:gap-4
                   max-md:gap-1 
                   sm:mx-2
                   "
      >
        {/* Start Welcome */}
        <div className="welcome box-shadow rounded-md shadow-xl min-sm:ml-4  bg-white mb-2 lg:gap-2 relative overflow-hidden card">
          <div className="intro flex relative bg-[#eee] w-full p-5 justify-between items-center">
            <div className=" w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h2 className="m-0 font-bold text-xl">Welcome</h2>
              <p className="text-gray-500 mt-5">Abd Kh</p>
            </div>
            <img
              className="h-20 text-end w-30 p-1 m-4 max-xl:invisible "
              src={welcome}
              alt="no image"
            />
          </div>
          <img
            className=" w-10 max-sm:left-1/2 ml-8 max-sm:ml-0 max-sm:translate-x-[-50%] mt-[-1.5rem] z-10 relative mb-2 "
            src={avatar}
            alt="no img"
          />
          <div className="body border border-gray-200 text-center flex justify-center p-10  mb-4 max-sm:block">
            <span className="flex-1 max-sm:block">
              Devoloper: <span className="md:block">Abd Kh</span>
            </span>
            <span className="flex-1 max-sm:block">
              Projects: <span className="md:block">20</span>
            </span>
            <span className="flex-1 max-sm:block">
              Earned:<span className="md:block">9000$</span>
            </span>
          </div>
          <div className="hover:bg-gray-50  transition-all border border-gray-300  rounded-lg mb-4 mt-0 mr-4 m-auto block w-fit">
            <NavLink
              className=" bg-gradient-to-r from-blue-700 to-purple-600 p-2.5  bg-clip-text text-transparent font-lg  transition-all
                font-bold font-thing  "
              to="/profile"
            >
              Profile
            </NavLink>
          </div>
        </div>
        {/* End Welcome */}
        {/* START QUICK DRAFT */}
        <div className="quic-draft p-5 mb-2 card box-shadow rounded-md shadow-xl min-sm:ml-4  bg-white  relative overflow-hidden  lg:gap-2 ">
          <h2 className="mb-1 m-0 font-bold">QuiCk Draft</h2>
          <p className="text-gray-400 mt-0 mb-10">
            Write A Draft For Your Ideas
          </p>
          <form action="">
            <input
              className="block mb-4 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-gray-700 outline-none  w-full p-2.5 transition-all focus:placeholder:invisible"
              type="text"
              placeholder="title"
            />
            <textarea
              className="block mb-4 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-gray-700 outline-none  w-full p-2.5 transition-all  lg:h-[8rem] focus:placeholder:invisible resize-none"
              placeholder="You thought"
            ></textarea>
            <input
              className="border border-gray-300  text-sm rounded-lg  focus:border-gray-700 outline-none  w-fit p-2.5 focus:placeholder:invisible  cursor-pointer ml-auto block hover:bg-slate-100 transition-all  mt-0 mr-1 m-auto "
              type="submit"
              value="Save"
            />
          </form>
        </div>
        {/* END QUICK DRAFT */}
        {/* Start Targets */}
        <div className="targets pt-5 px-3 card bg-white rounded-lg shadow-xl lg:gap-2 mb-2">
          <h2 className="mt-0 mb-6 ">Targets</h2>
          <p className="mt-0 mb-4 text-gray-500">Targets Of The Year</p>
          <div className="tragets-row mb-2 blue flex  items-center">
            <div className="icon text-blue-500 bg-blue-200 w-20 h-20 p-6   text-xl font-extrabold rounded-xl flex items-center justify-center">
              $
            </div>
            <div className="details flex translate-x-2 flex-col text-start w-full">
              <span className="text-gray-500">Money :</span>
              <span className="block flex-1 mt-1 mb-2  font-bold">20000$</span>

              <div className="progress  relative h-1 bg-blue-200  before:content-[''] before:absolute before:h-full  before:w-[55%] before:bg-blue-700  before:top-0 ">
                <span
                  className="absolute bottom-4 left-[55%] transform -translate-x-1/2  rounded-md px-0.5 py-0.25 
                     before:content-[''] before:absolute  before:bottom-[-6px] before:left-1/2       
                before:translate-x-[-50%] 
               before:border-l-[7px] before:border-r-[7px] before:border-t-[7px]
               before:border-l-transparent before:border-r-transparent before:border-t-blue-700
                   text-white
                   before:border-transparent
                   bg-blue-700
                    "
                >
                  55%
                </span>
              </div>
            </div>
          </div>
          <div className="tragets-row mb-2 green flex  items-center">
            <div className="icon text-green-500 bg-green-200 w-20 h-20 p-6   text-xl font-extrabold rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="details flex translate-x-2 flex-col text-start w-full">
              <span className="text-gray-500"> Proects:</span>
              <span className="block flex-1 mt-1 mb-2  font-bold">24</span>

              <div className="progress  relative h-1 bg-green-200  before:content-[''] before:absolute before:h-full  before:w-[88%] before:bg-green-700  before:top-0 ">
                <span
                  className="absolute bottom-4 left-[88%] transform -translate-x-1/2  rounded-md px-0.5 py-0.25 
                     before:content-[''] before:absolute  before:bottom-[-6px] before:left-1/2       
                before:translate-x-[-50%] 
               before:border-l-[7px] before:border-r-[7px] before:border-t-[7px]
               before:border-l-transparent before:border-r-transparent before:border-t-green-700
                   text-white
                   before:border-transparent
                   bg-green-700
                    "
                >
                  88%
                </span>
              </div>
            </div>
          </div>
          <div className="tragets-row mb-2 orange pb-6 flex  items-center">
            <div className="icon text-orange-500 bg-orange-200 w-20 h-20 p-6  text-xl font-extrabold rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="details flex translate-x-2 flex-col text-start w-full">
              <span className="text-gray-500">Team :</span>
              <span className="block flex-1 mt-1 mb-2  font-bold">10</span>

              <div className="progress  relative h-1 bg-orange-200  before:content-[''] before:absolute before:h-full  before:w-[60%] before:bg-orange-700  before:top-0 ">
                <span
                  className="absolute bottom-4 left-[60%] transform -translate-x-1/2  rounded-md px-0.5 py-0.25 
                     before:content-[''] before:absolute  before:bottom-[-6px] before:left-1/2       
                before:translate-x-[-50%] 
               before:border-l-[7px] before:border-r-[7px] before:border-t-[7px]
               before:border-l-transparent before:border-r-transparent before:border-t-orange-700
                   text-white
                   before:border-transparent
                   bg-orange-700
                    "
                >
                  60%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* End Targets */}

        {/* Start Tickets Statistics */}
        <div className="tickets p-10 card lg:gap-2 mb-2 bg-white text-start  rounded-xl">
          <h2 className="max-sm:text-center font-bold text-2xl text-black pb-5">
            Tickets Statistics
          </h2>
          <p className="text-gray-500 max-sm:text-center pb-4">
            Everything About Support Tickets
          </p>
          <div className="flex flex-wrap gap-4 text-center">
            <div className="box p-10 h-40 rounder-lg text-gray-400 border border-solid gap-20 w-[calc(50%-1.3rem)] max-sm:w-full hover:bg-gray-100 transition-all">
              <FontAwesomeIcon
                className="text-green-500  p text-3xl"
                icon={faFaceSmile}
              />
              <span className="block text-black text-3xl font-mono font-bold">
                2500
              </span>
              Total
            </div>
            <div className="box p-10 h-40 rounder-lg  border border-solid gap-20 w-[calc(50%-1.3rem)] max-sm:w-full hover:bg-gray-100 transition-all">
              <FontAwesomeIcon
                className="text-purple-500 font-extrabold  text-3xl"
                icon={faCheck}
              />
              <span className="block text-black text-3xl font-mono font-bold">
                2500
              </span>
              Total
            </div>
            <div className="box p-10 h-40 rounder-lg text-gray-400 border border-solid gap-20 w-[calc(50%-1.3rem)] max-sm:w-full hover:bg-gray-100 transition-all">
              <FontAwesomeIcon
                className="text-red-500 font-extrabold  text-3xl"
                icon={faEllipsis}
              />
              <span className="block text-black text-3xl font-mono font-bold">
                2500
              </span>
              Total
            </div>
            <div className="box p-10 h-40 rounder-lg text-gray-400 border border-solid gap-20 w-[calc(50%-1.3rem)] max-sm:w-full hover:bg-gray-100 transition-all">
              <FontAwesomeIcon
                className="text-pink-500 font-extrabold  text-3xl"
                icon={faCircleNotch}
              />
              <span className="block text-black text-3xl font-mono font-bold">
                2500
              </span>
              Total
            </div>
          </div>
        </div>
        {/* End Tickets Statistics */}

        {/* Start Latest News */}
        <div className="latest-news card lg:gap-2 mb-2 p-10 bg-white text-start  rounded-xl max-sm:text-center">
          <h2 className="font-bold text-2xl text-black pb-5 mb-2">
            Latest News
          </h2>
          <div className="news-row hover:bg-gray-50 flex items-center gap-1 mb-2 pb-4 border-b border-gray-200 max-sm:block ">
            <img
              className="w-[120px] inline mb-1 rounded-lg mr-3"
              src={news_01}
              alt="no img"
            />
            <div className="info flex-1 ">
              <h3 className="m-0 mb-2 font-bold text-xl">
                Created SASS Section
              </h3>
              <p className="m-0 text-gray-400">
                New SASS Examples And Tutorial
              </p>
            </div>
            <span className="m-0 border w-fit  px-4 py-1 rounded-lg text-sm hover:bg-gray-50 ">
              3 Days Ago
            </span>
          </div>
          <div className="news-row hover:bg-gray-50 flex items-center gap-1 mb-2 pb-5 border-b border-gray-200 max-sm:block ">
            <img
              className="w-[120px] inline mb-1 rounded-lg mr-3"
              src={news_02}
              alt="no img"
            />
            <div className="info flex-1 ">
              <h3 className="m-0 mb-2 font-bold text-xl">Changed The Design</h3>
              <p className="m-0 text-gray-400">A Brand New Website Design</p>
            </div>
            <span className="m-0 border w-fit  px-4 py-1 rounded-lg text-sm hover:bg-gray-50 ">
              7 Days Ago
            </span>
          </div>
          <div className="news-row hover:bg-gray-50 flex items-center gap-1 mb-2 pb-5 border-b border-gray-200 max-sm:block ">
            <img
              className="w-[120px] inline mb-1 rounded-lg mr-3"
              src={news_03}
              alt="no img"
            />
            <div className="info flex-1 ">
              <h3 className="m-0 mb-2 font-bold text-xl">Team Increasedn</h3>
              <p className="m-0 text-gray-400">3 Developers Joined The Team</p>
            </div>
            <span className="m-0 border w-fit  px-4 py-1 rounded-lg text-sm hover:bg-gray-50 ">
              15 Days Ago
            </span>
          </div>
          <div className="news-row hover:bg-gray-50 flex items-center  max-sm:block ">
            <img
              className="w-[120px] inline rounded-lg mr-3"
              src={news_04}
              alt="no img3"
            />
            <div className="info flex-1 ">
              <h3 className="m-0  font-bold text-xl">Added Payment Gateway</h3>
              <p className="m-0 text-gray-400 ">
                Many New Payment Gateways Added
              </p>
            </div>
            <span className="m-0 border w-fit  px-4 py-1 marounded-lg text-sm hover:bg-gray-50  ">
              20 Days Ago
            </span>
          </div>
        </div>
        {/* End Latest News */}
        {/* START Latest Tasks */}
        <div className="tasks card p-10 lg:gap-2 mb-2 bg-white rounded-lg">
          <h2 className="font-bold text-2xl text-black text-start pb-5">
            Latest Tasks
          </h2>
          <div className="task-row opacity-25 line-through border-b border-gray-400 border-dotted  mb-3 pb-3">
            <div className="tasks  flex flex-1 justify-between ">
              <p className="text-start  font-bold text-xl text-black pb-1 m-0">
                Record One New Video
              </p>
              <span className="">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-red-700 transition-all duration-300 text-xl"
                  icon={faTrash}
                />
              </span>
            </div>
            <div className="text-start text-xl text-gray-400 ">
              Record Python Create Exe Project
            </div>
          </div>
          <div className="task-row border-b border-gray-400 border-dotted  mb-3 pb-3">
            <div className="tasks  flex flex-1 justify-between ">
              <p className="text-start font-bold text-xl text-black pb-1 m-0">
                Finish Lesson
              </p>
              <span className="">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-red-700 transition-all duration-300 text-xl"
                  icon={faTrash}
                />
              </span>
            </div>
            <div className="text-start text-xl text-gray-400">
              Finish Teaching Flex Box
            </div>
          </div>
          <div className="task-row border-b border-gray-400 border-dotted  mb-3 pb-3">
            <div className="tasks  flex flex-1 justify-between ">
              <p className="text-start font-bold text-xl text-black pb-1 m-0">
                Write Article
              </p>
              <span className="">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-red-700 transition-all duration-300 text-xl"
                  icon={faTrash}
                />
              </span>
            </div>
            <div className="text-start text-xl text-gray-400">
              Write Low Level vs High Level Languages
            </div>
          </div>
          <div className="task-row border-b border-gray-400 border-dotted  mb-3 pb-3">
            <div className="tasks  flex flex-1 justify-between ">
              <p className="text-start font-bold text-xl text-black pb-1 m-0">
                Finish Project
              </p>
              <span className="">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-red-700 transition-all duration-300 text-xl"
                  icon={faTrash}
                />
              </span>
            </div>
            <div className="text-start text-xl text-gray-400">
              Publish Academy Programming Project
            </div>
          </div>
          <div className="task-row ">
            <div className="tasks  flex flex-1 justify-between ">
              <p className="text-start font-bold text-xl text-black pb-1 m-0">
                Attend The Meeting
              </p>
              <span className="">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-red-700 transition-all duration-300 text-xl"
                  icon={faTrash}
                />
              </span>
            </div>
            <div className="text-start text-xl text-gray-400">
              Attend The Project Business Analysis Meeting
            </div>
          </div>
        </div>
        {/* End Latest Tasks */}
        {/* Start Top Search Items */}
        <div className="search-items card lg:gap-2 mb-2 p-10 bg-white rounded-lg">
          <h2 className="m0 p-0 mb-10 font-bold text-2xl text-black text-start">
            Top Search Items
          </h2>
          <div className="items-heading flex justify-between mb-5 text-gray-400 font-bold">
            <div>keyWord</div>
            <div>Search Count</div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">JavaScript</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              220
            </div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">Code</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              150
            </div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">PHP</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              500
            </div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">Logic</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              220
            </div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">C++</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              11
            </div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">TypeScript</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              100
            </div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">Python</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              1000
            </div>
          </div>
          <div className="items flex justify-between mb-5 ">
            <div className="font-bold text-sm">Java</div>
            <div className="border border-gray-300 bg-gray-100 rounded-lg px-2">
              13
            </div>
          </div>
        </div>

        {/* End Top Search Items */}
        {/* Start Latest Uploads*/}
        <div className="latest-uploads lg:gap-2 mb-2 card p-10 bg-white rounded-lg ">
          <h2 className="font-bold text-2xl text-black mb-8">Latest Uploads</h2>
          <ul className="m-0">
            <li className="flex justify-between items-center pb-4 mb-2 border-b border-gray-400">
              <div className="flex items-center">
                <img
                  className="mr-5 w-[40px] h-[40px]"
                  src={pdf}
                  alt="no img"
                />
                <div>
                  <p className="m-0 block text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-bold">
                    my-file.pdf
                  </p>
                  <span className="block text-start text-gray-500">
                    Abdullah
                  </span>
                </div>
              </div>
              <div className="border bg-gray-200 w-fit p-2 rounded-lg">
                2.9mb
              </div>
            </li>
            <li className="flex justify-between items-center pb-5 mb-2 border-b border-gray-400">
              <div className="flex items-center">
                <img
                  className="mr-5 w-[40px] h-[40px]"
                  src={avi}
                  alt="no img"
                />
                <div>
                  <p className="m-0 block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#544f7d] to-[#45caff] font-bold">
                    My-Video-File.avi
                  </p>
                  <span className="block text-gray-500 text-start">Admin</span>
                </div>
              </div>
              <div className="border bg-gray-200 w-fit p-2 rounded-lg">
                4.9mb
              </div>
            </li>
            <li className="flex justify-between items-center pb-5 mb-2 border-b border-gray-400">
              <div className="flex items-center">
                <img
                  className="mr-5 w-[40px] h-[40px]"
                  src={psd}
                  alt="no img"
                />
                <div>
                  <p className="m-0 block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#220b34] to-[#c11e38] font-bold">
                    My-Psd-File.pdf
                  </p>
                  <span className="block text-start text-gray-500">Kh</span>
                </div>
              </div>
              <div className="border bg-gray-200 w-fit p-2 rounded-lg">
                2.9mb
              </div>
            </li>
            <li className="flex justify-between items-center pb-5 mb-2 border-b border-gray-400">
              <div className="flex items-center">
                <img className="mr-5 w-[40px] h-[40px]" src={zip} alt="" />
                <div>
                  <p className="m-0 block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#243748] to-[#4b749f] font-bold">
                    My-Zip-File.pdf
                  </p>
                  <span className="block text-gray-500 text-start">User</span>
                </div>
              </div>
              <div className="border bg-gray-200 w-fit p-2 rounded-lg">
                5.2mb
              </div>
            </li>
            <li className="flex justify-between items-center pb-5 mb-2 border-b border-gray-400">
              <div className="flex items-center">
                <img className="mr-5 w-[40px] h-[40px]" src={dll} alt="" />
                <div>
                  <p className="m-0 block text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-bold">
                    My-DLL-File.pdf
                  </p>
                  <span className="block text-gray-500 text-start">Admin</span>
                </div>
              </div>
              <div className="border bg-gray-200 w-fit p-2 rounded-lg">
                7.2mb
              </div>
            </li>
            <li className="flex justify-between items-center pb-5 mb-2 border-b border-gray-400">
              <div className="flex items-center">
                <img className="mr-5 w-[40px] h-[40px]" src={eps} alt="" />
                <div>
                  <p className="m-0 block text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 font-bold">
                    My-Eps-File.pdf
                  </p>
                  <span className="block text-start text-gray-500">
                    Designer
                  </span>
                </div>
              </div>
              <div className="border bg-gray-200 w-fit p-2 rounded-lg">
                2.9mb
              </div>
            </li>
          </ul>
        </div>
        {/* End Latest Uploads*/}
        {/* Start Current Project*/}
        <div className="last-porject card lg:gap-2 mb-2 p-10 bg-white rounded-lg relative max-h-full">
          <h2 className="mt-0 mb-10 text-start font-bold text-2xl">
            Current Project
          </h2>
          <ul className="relative before:content-[''] before:absolute before:w-0.5 before:h-full before:bg-blue-700 before:top-0 before:left-[-10px] ">
            <li className="mt-12 flex items-center done relative before:content[''] before:absolute before:outline  before:outline-blue-700 before:w-6 before:h-5 before:rounded-full before:-left-5 before:z-10 before:bg-blue-700 before:border-2 before:border-white    ">
              <div className="ml-4">Got The Project</div>
            </li>
            <li className="mt-12 flex items-center done relative before:content[''] before:absolute before:outline before:outline-blue-700 before:w-6 before:h-6 before:rounded-full before:-left-5 before:border-2 before:border-white before:bg-blue-700 before:z-10 ">
              <div className="ml-4">Started The Project</div>
            </li>
            <li className="mt-12 flex items-center done relative before:content[''] before:absolute before:outline before:outline-blue-700 before:w-6 before:h-6 before:rounded-full before:-left-5  before:border-2 before:border-white before:bg-blue-700 before:z-10">
              <div className="ml-4">The Project About To Finish</div>
            </li>
            <li className="mt-12 flex items-center done relative before:content[''] before:absolute before:outline before:outline-offset-2 before:outline-blue-700 before:w-5 before:h-5 before:rounded-full before:-left-5  before:bg-blue-700 before:z-10">
              <div className="ml-4">Test The Project</div>
            </li>
            <li className="mt-12 flex items-center done relative before:content[''] before:absolute before:outline before:outline-blue-700 before:w-6 before:h-6 before:rounded-full before:-left-5  before:bg-blue-700 before:z-10 before:animate-change-color">
              <div className="ml-4">Receive the final payment</div>
            </li>
          </ul>
          <img
            className="max-sm:invisible absolute right-0 bottom-0 opacity-30 w-52"
            src={project}
            alt=""
          />
        </div>
        {/* End Current Project*/}
        {/*Start Reminders */}
        <div className="reminders card p-10 lg:gap-2 mb-2 bg-white rounded-lg relative">
          <h2 className="mt-0 mb-10 text-start font-bold text-2xl">
            Reminders
          </h2>
          <ul className="m-0">
            <li className="flex items-center mt-7 ">
              <span className="key bg-blue-700 mr-10 rounded-full p-2.5 w-2 h-2"></span>
              <div className="pl-7 border-l-4 border-blue-700">
                <p className="font-bold text-lg ">Cheack My Tasks List</p>
                <span className="text-gray-500">28/04/2025 - 12:00am</span>
              </div>
            </li>
            <li className="flex items-center mt-7 ">
              <span className="key bg-green-700 mr-10 rounded-full p-2.5 w-2 h-2"></span>
              <div className="pl-7 border-l-4 border-green-700">
                <p className="font-bold text-lg ">Check My Projects</p>
                <span className="text-gray-500">2/04/2020 - 05:00pm</span>
              </div>
            </li>
            <li className="flex items-center mt-7 ">
              <span className="key bg-red-700 mr-10 rounded-full p-2.5 w-2 h-2"></span>
              <div className="pl-7 border-l-4 border-red-700">
                <p className="font-bold text-lg ">Call All My Clients</p>
                <span className="text-gray-500">28/03/2025 - 01:00am</span>
              </div>
            </li>
            <li className="flex items-center mt-7 ">
              <span className="key bg-orange-500 mr-10 rounded-full p-2.5 w-2 h-2"></span>
              <div className="pl-4 border-l-4 border-orange-500">
                <p className="font-bold text-lg w-full">
                  Finish The Development Workshop
                </p>
                <span className="text-gray-500 text-start block">
                  10/04/2025 - 12:00am
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/*End Reminders */}
        {/* Start Latest Post */}
        <div className="latest-post card p-10 lg:gap-2 mb-2 bg-white rounded-lg">
          <h2 className="mt-0 mb-10 text-start font-bold text-2xl max-sm:text-center">
            Latest Post
          </h2>
          <div className="heading flex flex-wrap ">
            <img className="w-12 mr-4 rounded-full" src={avatar} alt="" />
            <div className="info flex flex-col text-start">
              <span className="block font-bold "> Abdullah Kh</span>
              <p>About 3 Hours Ago</p>
            </div>
          </div>
          <p className="mt-4 text-start text-lg font-medium border-t-2 pt-4 border-b-2 pb-5 leading-8">
            You can fool all of the people some of the time, and some of the
            people all of the time, but you can't fool all of the people all of
            the time.
          </p>
          <div className="flex justify-between items-center w-full mt-10 ">
            <div className="">
              <FontAwesomeIcon
                className="mr-2 text-blue-700 text-lg font-bold  "
                icon={faThumbsUp}
              />
              110k
            </div>
            <div>
              <FontAwesomeIcon
                className="mr-2 text-blue-700 text-lg font-bold  "
                icon={faMessage}
              />
              500
            </div>
          </div>
        </div>
        {/* End Latest Post */}
        {/* Start Social Media Stats */}
        <div className="social-media card p-10 max-sm:px-3 lg:gap-2 mb-2 bg-white rounded-lg transition-all">
          <h2 className=" text-start max-sm:text-center font-bold text-2xl mb-10">
            Social Media Stats
          </h2>
          <div className="Social-content">
            <div
              className="Social-row group flex justify-between relative items-center mb-1 border rounded-lg h-20 overflow-hidden bg-blue-200 
              max-sm:h-16
             "
            >
              <div className="flex justify-between  items-center">
                <FontAwesomeIcon
                  className="mr-6 group-hover:rotate-[6deg] group-hover:scale-[1.09] transition-all text-white text-4xl font-bold bg-blue-500 p-5 rounded-[4px]  flex justify-center items-center w-10
                  max-sm:mr-1
                  max-sm:text-5xl
                  max-sm:py-6
                  max-sm:w-5
                  "
                  icon={faFacebookF}
                />
                <span className="font-bold text-blue-600 max-sm:text-sm max-sm:text-start">
                  2M Like
                </span>
              </div>
              <div className=" bg-gradient-to-tr from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 w-20 cursor-pointer p-2.5 mr-4 rounded-lg max-sm:p-1.5 max-sm:mr-1">
                <span className="text-white px-2.5 py-0.5 font-lg font-bold text-lg max-sm:text-sm">
                  Like
                </span>
              </div>
            </div>
            <div className="Social-row max-sm:h-16 group flex justify-between relative items-center mb-1 border  rounded-lg h-20 overflow-hidden bg-gradient-to-tr from-[#c13584b5] to-[#833ab4dc]">
              <div className="flex justify-between items-center ">
                <FontAwesomeIcon
                  className="mr-6 group-hover:rotate-[6deg] group-hover:scale-[1.09] transition-all text-white text-4xl font-bold 
                 bg-gradient-to-t from-[#c13584] to-[#833ab4]   p-5 rounded-[4px]  flex justify-center items-center w-10
                  max-sm:mr-1
                  max-sm:text-5xl
                  max-sm:w-5
                  "
                  icon={faInstagram}
                  bg-gradient-to-tr
                />
                <span className="font-bold max-sm:text-start text-[#802495] max-sm:text-sm">
                  90K Followers
                </span>
              </div>
              <div className="bg-gradient-to-t hover:to-indigo-500 w-20 cursor-pointer p-2.5 mr-4 rounded-lg max-sm:p-1.5 max-sm:mr-1    bg-purple-600 hover:bg-purple-700 flex items-center justify-center">
                <span className="text-white px-2.5   font-lg font-bold text-lg max-sm:text-sm ">
                  Follow
                </span>
              </div>
            </div>
            <div className="Social-row group flex justify-between relative items-center mb-1 border max-sm:h-16  rounded-lg h-20 overflow-hidden bg-red-200">
              <div className="flex justify-between items-center ">
                <FontAwesomeIcon
                  className="mr-6 group-hover:rotate-[6deg] group-hover:scale-[1.09] transition-all text-white text-4xl font-bold bg-red-500 p-5 rounded-[4px]  flex justify-center items-center w-10
                  max-sm:mr-1
                  max-sm:text-5xl
                  max-sm:py-6
                  max-sm:w-5
                  "
                  icon={faYoutube}
                />
                <span className="font-bold text-red-500 max-sm:text-sm max-sm:text-start">
                  22M Subs
                </span>
              </div>
              <div className="bg-red-500 hover:bg-red-600 w-[5.5rem] cursor-pointer 5 mr-4 rounded-lg max-sm:p-1.5 max-sm:mr-1 flex items-center justify-center p-2.5">
                <span className="text-white font-lg font-bold text-lg max-sm:text-sm ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="Social-row group flex justify-between relative items-center  border pl-0 rounded-lg h-20 overflow-hidden bg-cyan-200 max-sm:h-16">
              <div className="flex justify-between  items-center">
                <FontAwesomeIcon
                  className="mr-6 group-hover:rotate-[6deg] group-hover:scale-[1.09] transition-all text-white text-4xl font-bold bg-cyan-500 p-5 rounded-[4px]  flex justify-center items-center w-10
                  max-sm:mr-1
                  max-sm:text-5xl
                  max-sm:py-6
                  max-sm:w-5
                  "
                  icon={faLinkedin}
                />
                <span className="text-cyan-600 font-bold max-sm:text-sm max-sm:text-start">
                  10K <br />
                  Followers
                </span>
              </div>
              <div className="bg-cyan-500 hover:bg-cyan-600  w-20 cursor-pointer p-2.5 mr-4 rounded-lg max-sm:p-1.5 max-sm:mr-1     flex items-center justify-center">
                <span className="text-white px-2.5   font-lg font-bold text-lg max-sm:text-sm ">
                  Follow
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*End Social Media Stats  */}
      </div>
      {/* Start Projects Table */}
      <div className="projects card p-10 lg:gap-2 mb-2 mx-2 bg-white rounded-lg ">
        <h2 className=" text-start max-sm:text-center font-bold text-2xl mb-10   text-black">
          Projects
        </h2>
        <div className=" responsive-table text-black overflow-x-auto">
          <table className="table-auto w-full min-w-[1000px] border-spacing-0 ">
            <thead className="text-left bg-gray-400">
              <tr>
                <td className="bg-gray-200 p-2 ">Name</td>
                <td className="bg-gray-200 p-2 ">Fininsh Date</td>
                <td className="bg-gray-200 p-2 ">Client</td>
                <td className="bg-gray-200 p-2 ">Price</td>
                <td className="bg-gray-200 p-2 ">Team</td>
                <td className="bg-gray-200 p-2 ">Status</td>
              </tr>
            </thead>
            <tbody>
              <tr className="group">
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Ministry Wikipedia
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  10 May 2022
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Ministry
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  $5300
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Img
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
 "
                >
                  <span className="border p-1 rounded-lg text-black font-thin  bg-yellow-200">
                    Pending
                  </span>
                </td>
              </tr>

              <tr className="group">
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  Elzero Shop
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  12 Oct 2021
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  Elzero Company
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  $1500
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  Img
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  <span className="border p-1 rounded-lg text-black font-thin  bg-blue-200">
                    In Progress
                  </span>
                </td>
              </tr>

              <tr className="group">
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  Bouba App
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  05 Sep 2021
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  Bouba
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  $800
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  Img
                </td>
                <td className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all">
                  <span className="border p-1 rounded-lg text-black font-thin  bg-green-200">
                    Completed
                  </span>
                </td>
              </tr>

              <tr className="group">
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Mahmoud Website
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  22 May 2021
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Mahmoud
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  $100
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Img
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  <span className="border p-1 rounded-lg text-black font-thin  bg-green-200">
                    Completed
                  </span>
                </td>
              </tr>

              <tr className="group">
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Sayed Website
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  24 May 2021
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Sayed
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  $300
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Img
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  <span className="border p-1 rounded-lg text-black font-thin  bg-red-400">
                    Rejected
                  </span>
                </td>
              </tr>
              <tr className="group">
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Arena Application
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  01 Mar 2021
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Arena Company
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  $2600
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  Img
                </td>
                <td
                  className="border border-gray-200 p-2 group-hover:bg-gray-100 transition-all
"
                >
                  <span className="border p-1 rounded-lg text-black font-thin  bg-yellow-200">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* End Projects Table */}
    </>
  );
};

export default Page1;
