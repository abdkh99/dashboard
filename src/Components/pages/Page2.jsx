import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ToggleSwitch from "../ToggleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FrequencyRadio from "../../Components/FrequencyRadio";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import CharacterSelector from "../CharacterSelector";
import { useEffect } from "react";
const Page2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <h1 className="heading-h1 fade-in">Settings</h1>
      <>
        <div
          className="settings-page max-lg:m-2 mx-4 text-black 
        max-sm:mx-2 max-sm:flex max-sm:flex-col grid max-sm:mb-6
       lg:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] gap-4 
        max-lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] max-lg:gap-2 "
        >
          <div className="p-10 bg-white rounded-lg shadow-xl card">
            <div className="heading">
              <h2 className="pb-1 font-bold text-2xl font-roboto">
                Site Control
              </h2>
              <p className="text-gray-400">
                Control The Website If There Is Maintenance
              </p>
            </div>
            <div className="heading2 pt-5  flex justify-between items-center">
              <div>
                <h2 className="pb-1 font-medium">Website Control</h2>
                <p className="text-gray-400">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <div>
                <ToggleSwitch></ToggleSwitch>
              </div>
            </div>
            <div className="m-0 p-0 ">
              <textarea
                placeholder="Type The Reason Here"
                className=" bg-white border border-gray-300 mt-5 w-full lg:h-40 md:h-24 h-10 rounded-lg outline-none  p-2 m-2 resize-none "
                type="text"
              />
            </div>
          </div>
          <div className="Gen-Info p-10 bg-white rounded-lg shadow-xl card">
            <div className="heading">
              <h2 className="pb-1 font-bold text-2xl font-roboto">
                General Info
              </h2>
              <p className="text-gray-400">
                General Information About Your Account
              </p>
            </div>
            <div className="content mt-5">
              <label className="first block" htmlFor="">
                First Name
              </label>
              <input
                className="bg-white border mt-2 p-1 border-gray-300 outline-none rounded-md w-full pl-2 "
                type="text"
                id="first"
                placeholder="First Name "
              />
            </div>
            <div className="content mt-5">
              <label className="first block" htmlFor="">
                Last Name
              </label>
              <input
                className="bg-white border mt-2 p-1 border-gray-300 outline-none rounded-md w-full pl-2 "
                type="text"
                id="first"
                placeholder="Last Name"
              />
            </div>
            <div className="content mt-5">
              <label className="first block" htmlFor="">
                Email
              </label>
              <input
                className="bg-white border mt-1 p-1 inline border-gray-300 outline-none rounded-md w-[calc(100%-40px)] pl-2 mr-2 "
                type="email"
                id="first"
                placeholder="@abdnn.sa"
              />
              <button className="w-[10px] text-blue-500">Change</button>
            </div>
          </div>

          <div className="Sec-Info  p-10 bg-white rounded-lg shadow-xl card">
            <div className="heading">
              <h2 className="pb-1 font-bold text-2xl font-roboto ">
                General Info
              </h2>
              <p className="text-gray-400">
                General Information About Your Account
              </p>

              <div className="content mt-5 flex justify-between items-center">
                <div>
                  <p>Password</p>
                  <span className="block text-gray-400">
                    Last Change On 25/10/2025
                  </span>
                </div>
                <div>
                  <button className="border-gray-300 p-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-all">
                    Change
                  </button>
                </div>
              </div>

              <div className="content mt-5 flex justify-between items-center">
                <div>
                  <p>Two-Factor Authentication</p>
                  <span className="block text-gray-400">
                    Enable/Disable The Feature
                  </span>
                </div>
                <div>
                  <ToggleSwitch className="border-gray-300 p-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-all">
                    Change
                  </ToggleSwitch>
                </div>
              </div>

              <div className="content mt-5 flex justify-between items-center">
                <div>
                  <p>Device</p>
                  <span className="block text-gray-400">
                    Check The Login Devices List
                  </span>
                </div>
                <div>
                  <button className="border-gray-300 p-2 bg-gray-400 rounded-xl text-white hover:bg-gray-500 transition-all">
                    Device
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="Social-Info p-10 bg-white rounded-lg shadow-xl card">
            <div className="heading">
              <h2 className="pb-1 font-bold text-2xl font-roboto">
                Social Info
              </h2>
              <p className="text-gray-400">Social Media Information</p>
            </div>

            <div className="m-0 p-0 Social-content mt-5  transition-all">
              <div className="content-row group border mb-2 rounded-lg relative h-10 mr-10">
                <FontAwesomeIcon
                  className=" group-focus-within:text-blue-600  border border-[#b8b7b7e4]  bg-gray-200 text-gray-500 rounded-lg rounded-tr-sm rounded-br-sm w-3 px-3 h-9 transition-all"
                  icon={faFacebookF}
                />
                <input
                  className="group w-full h-full absolute bg-white rounded-lg border border-[#b8b7b7e4] rounded-tl-none rounded-bl-none p-4 outline-none transition-all"
                  type="text"
                  placeholder="Facebook Name "
                />
              </div>
              <div className="content-row group border mb-2 rounded-lg relative h-10 mr-10">
                <FontAwesomeIcon
                  className=" group-focus-within:text-red-600  border border-[#b8b7b7e4]  bg-gray-200 text-gray-500 rounded-lg rounded-tr-sm rounded-br-sm w-5 px-2 h-9 transition-all"
                  icon={faYoutube}
                />
                <input
                  className="group w-full h-full absolute bg-white rounded-lg border border-[#b8b7b7e4] rounded-tl-none rounded-bl-none p-4 outline-none transition-all"
                  type="text"
                  placeholder="YouTube UserName "
                />
              </div>
              <div className="content-row group border mb-2 rounded-lg relative h-10 mr-10">
                <FontAwesomeIcon
                  className=" group-focus-within:text-blue-700  border border-[#b8b7b7e4]  bg-gray-200 text-gray-500 rounded-lg rounded-tr-sm rounded-br-sm w-5 px-2 h-9 transition-all"
                  icon={faLinkedin}
                />
                <input
                  className="group w-full h-full absolute bg-white rounded-lg border border-[#b8b7b7e4] rounded-tl-none rounded-bl-none p-4 outline-none transition-all"
                  type="text"
                  placeholder="Linkedin UserName "
                />
              </div>
              <div className="content-row group border mb-2 rounded-lg relative h-10 mr-10">
                <FontAwesomeIcon
                  className=" group-focus-within:text-pink-600  border border-[#b8b7b7e4]  bg-gray-200 text-gray-500 rounded-lg rounded-tr-sm rounded-br-sm w-5 px-2 h-9 transition-all"
                  icon={faInstagram}
                />
                <input
                  className="group w-full h-full absolute bg-white rounded-lg border border-[#b8b7b7e4] rounded-tl-none rounded-bl-none p-4 outline-none transition-all"
                  type="text"
                  placeholder="Instagram UserName "
                />
              </div>
            </div>
          </div>
          <div className="Widgets-Info p-10 bg-white rounded-lg shadow-xl card">
            <div className="heading">
              <h2 className="pb-1 font-bold text-2xl font-roboto">
                Widgets Control
              </h2>
              <p className="text-gray-400 mb-4">Show/Hide Widgets</p>
            </div>
            <div className="content flex items-center mb-4 ">
              <input
                type="checkbox"
                defaultChecked
                id="quickDraft"
                className="peer hidden"
              />
              <span
                className="w-4 h-4 relative border-2 rounded-[4px] border-gray-400  mr-2 peer-hover:border-blue-600  peer-checked:bg-blue-600 peer-checked:border-blue-600  transition-all 
                before:transition-all
                before:peer-checked:rotate-[360deg]
                before:peer-checked:content-['\2713']
                before:peer-checked:absolute
                before:peer-checked:text-[12px]
                before:peer-checked:font-bold
               before:peer-checked:text-white
                 before:peer-checked:top-[-4px]
                 before:peer-checked:left-[1px]
              "
              ></span>
              <label
                className="cursor-pointer text-black peer-checked:text-blue-500 peer-checked:font-bold no-select transition-all font-bold "
                htmlFor="quickDraft"
              >
                Quick Draft
              </label>
            </div>

            <div className="content flex items-center mb-4 ">
              <input
                defaultChecked
                type="checkbox"
                id="Yearly Targets"
                className="peer hidden"
              />
              <span
                className="w-4 h-4 relative border-2 rounded-[4px] border-gray-400  mr-2 peer-hover:border-blue-600  peer-checked:bg-blue-600 peer-checked:border-blue-600  transition-all 
                before:transition-all
                before:peer-checked:rotate-[360deg]
                before:peer-checked:content-['\2713']
                before:peer-checked:absolute
                before:peer-checked:text-[12px]
                before:peer-checked:font-bold
               before:peer-checked:text-white
                 before:peer-checked:top-[-4px]
                 before:peer-checked:left-[1px]
              "
              ></span>
              <label
                className="cursor-pointer text-black peer-checked:text-blue-500 peer-checked:font-bold no-select transition-all font-bold "
                htmlFor="Yearly Targets"
              >
                Yearly Targets
              </label>
            </div>
            <div className="content flex items-center mb-4 ">
              <input
                defaultChecked
                type="checkbox"
                id="Tickets Statistics"
                className="peer hidden"
              />
              <span
                className="w-4 h-4 relative border-2 rounded-[4px] border-gray-400  mr-2 peer-hover:border-blue-600  peer-checked:bg-blue-600 peer-checked:border-blue-600  transition-all 
                before:transition-all
                before:peer-checked:rotate-[360deg]
                before:peer-checked:content-['\2713']
                before:peer-checked:absolute
                before:peer-checked:text-[12px]
                before:peer-checked:font-bold
               before:peer-checked:text-white
                 before:peer-checked:top-[-4px]
                 before:peer-checked:left-[1px]
              "
              ></span>
              <label
                className="cursor-pointer text-black peer-checked:text-blue-500 peer-checked:font-bold no-select transition-all font-bold "
                htmlFor="Tickets Statistics"
              >
                Tickets Statistics
              </label>
            </div>

            <div className="content flex items-center mb-4 ">
              <input type="checkbox" id="Latest News" className="peer hidden" />
              <span
                className="w-4 h-4 relative border-2 rounded-[4px] border-gray-400  mr-2 peer-hover:border-blue-600  peer-checked:bg-blue-600 peer-checked:border-blue-600  transition-all 
                before:transition-all
                before:peer-checked:rotate-[360deg]
                before:peer-checked:content-['\2713']
                before:peer-checked:absolute
                before:peer-checked:text-[12px]
                before:peer-checked:font-bold
               before:peer-checked:text-white
                 before:peer-checked:top-[-4px]
                 before:peer-checked:left-[1px]
              "
              ></span>
              <label
                className="cursor-pointer text-black peer-checked:text-blue-500 peer-checked:font-bold no-select transition-all font-bold "
                htmlFor="Latest News"
              >
                Latest News
              </label>
            </div>

            <div className="content flex items-center mb-4 ">
              <input
                type="checkbox"
                id="Latest Tasks"
                className="peer hidden"
              />
              <span
                className="w-4 h-4 relative border-2 rounded-[4px] border-gray-400  mr-2 peer-hover:border-blue-600  peer-checked:bg-blue-600 peer-checked:border-blue-600  transition-all 
                before:transition-all
                before:peer-checked:rotate-[360deg]
                before:peer-checked:content-['\2713']
                before:peer-checked:absolute
                before:peer-checked:text-[12px]
                before:peer-checked:font-bold
               before:peer-checked:text-white
                 before:peer-checked:top-[-4px]
                 before:peer-checked:left-[1px]
              "
              ></span>
              <label
                className="cursor-pointer text-black peer-checked:text-blue-500 peer-checked:font-bold no-select transition-all font-bold "
                htmlFor="Latest Tasks"
              >
                Latest Tasks
              </label>
            </div>
            <div className="content flex items-center mb-4 ">
              <input
                type="checkbox"
                id="Top Search Items"
                className="peer hidden"
              />
              <span
                className="w-4 h-4 relative border-2 rounded-[4px] border-gray-400  mr-2 peer-hover:border-blue-600  peer-checked:bg-blue-600 peer-checked:border-blue-600  transition-all 
                before:transition-all
                before:peer-checked:rotate-[360deg]
                before:peer-checked:content-['\2713']
                before:peer-checked:absolute
                before:peer-checked:text-[12px]
                before:peer-checked:font-bold
               before:peer-checked:text-white
                 before:peer-checked:top-[-4px]
                 before:peer-checked:left-[1px]
              "
              ></span>
              <label
                className="cursor-pointer text-black peer-checked:text-blue-500 peer-checked:font-bold no-select transition-all font-bold "
                htmlFor="Top Search Items"
              >
                Top Search Items
              </label>
            </div>
          </div>

          <div className="Backup Manager p-10 bg-white rounded-lg shadow-xl card">
            <div className="heading">
              <h2 className="pb-1 font-bold text-2xl font-roboto">
                Backup Manager
              </h2>
              <p className="text-gray-400 mb-4">
                Control Backup Time And Location
              </p>
            </div>
            <div className="Backup-Content flex  flex-col mb-2">
              <div className="border-b border-gray-300 pb-6 mb-6">
                <FrequencyRadio />
              </div>
              <CharacterSelector />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Page2;
