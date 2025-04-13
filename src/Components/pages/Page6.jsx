import friends_01 from "../../../public/assets/friend-01.jpg";
import friends_02 from "../../../public/assets/friend-02.jpg";
import friends_03 from "../../../public/assets/friend-03.jpg";
import friends_04 from "../../../public/assets/friend-04.jpg";
import friends_05 from "../../../public/assets/friend-05.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const Page6 = () => {
  return (
    <>
      <p className="heading-h1 fade-in">Friends</p>
      <div
        className="Courses-Page grid 
                      3xl:grid-cols-5
                      2xl:grid-cols-5
                      xl:grid-cols-3
                      lg:grid-cols-3
                      lg:mx-6
                      md:grid-cols-2
                      md:mx-3
                      sm:grid-cols-1
                      "
      >
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_01}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Ahmed Nasser</h3>
            <p className="text-sm text-gray-400 ml-4 ">JavaScript Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                99 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm ml-[-3px]"
                  icon={faDiagramProject}
                />
                15 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                25 Articles
              </span>
            </div>
            <div className="mr-8 text-4xl font-poppins text-[#ffa60066]">
              VIP
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_02}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Omar Fathy</h3>
            <p className="text-sm text-gray-400 ml-4 ">Cloud Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                33 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm mr-1"
                  icon={faDiagramProject}
                />
                5 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                2 Articles
              </span>
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_03}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Omar Ahmed</h3>
            <p className="text-sm text-gray-400 ml-4 ">Mobile Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                88 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm ml-[-3px]"
                  icon={faDiagramProject}
                />
                155 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                2 Articles
              </span>
            </div>
            <div className="mr-8 text-4xl font-poppins text-[#ffa60066]">
              VIP
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_04}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Shady Nabil</h3>
            <p className="text-sm text-gray-400 ml-4 ">Back-End Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                10 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm"
                  icon={faDiagramProject}
                />
                10 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                6 Articles
              </span>
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24 mt-2"
              src={friends_05}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Mohamed Ibrahim</h3>
            <p className="text-sm text-gray-400 ml-4 ">Algorithm Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                70 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm ml-[-3px]"
                  icon={faDiagramProject}
                />
                65 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                20 Articles
              </span>
            </div>
            <div className="mr-8 text-4xl font-poppins text-[#ffa60066]">
              VIP
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_02}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Omar Fathy</h3>
            <p className="text-sm text-gray-400 ml-4 ">Cloud Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                33 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm mr-1"
                  icon={faDiagramProject}
                />
                5 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                2 Articles
              </span>
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_01}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Ahmed Nasser</h3>
            <p className="text-sm text-gray-400 ml-4 ">JavaScript Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                99 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm ml-[-3px]"
                  icon={faDiagramProject}
                />
                15 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                25 Articles
              </span>
            </div>
            <div className="mr-8 text-4xl font-poppins text-[#ffa60066]">
              VIP
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_03}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Omar Ahmed</h3>
            <p className="text-sm text-gray-400 ml-4 ">Mobile Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                88 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm ml-[-3px]"
                  icon={faDiagramProject}
                />
                155 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                2 Articles
              </span>
            </div>
            <div className="mr-8 text-4xl font-poppins text-[#ffa60066]">
              VIP
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24  mt-2"
              src={friends_04}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Shady Nabil</h3>
            <p className="text-sm text-gray-400 ml-4 ">Back-End Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                10 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm"
                  icon={faDiagramProject}
                />
                10 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                6 Articles
              </span>
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative mb-4">
          <div className="ml-6 translate-y-3">
            <span className="">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faEnvelope}
              />
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                className=" text-gray-500 text-sm ml-[-3px] bg-[#eee] p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500 cursor-pointer"
                icon={faPhoneVolume}
              />
            </span>
          </div>
          <div className="image flex items-center justify-center">
            <img
              className="rounded-full w-24 mt-2"
              src={friends_05}
              alt="no img"
            />
          </div>
          <div className="text-center translate-x-[-0.5rem] border-b pb-4">
            <h3 className="ml-4 mt-4">Mohamed Ibrahim</h3>
            <p className="text-sm text-gray-400 ml-4 ">Algorithm Developer</p>
          </div>

          <div className="flex justify-between items-center my-2 pb-2 border-b">
            <div className="flex flex-col">
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faFaceSmileWink}
                />
                70 Friend
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className=" text-gray-500 text-sm ml-[-3px]"
                  icon={faDiagramProject}
                />
                65 Projects
              </span>
              <span className="ml-4 text-sm mb-1">
                <FontAwesomeIcon
                  className="mr-1 text-gray-500"
                  icon={faNewspaper}
                />
                20 Articles
              </span>
            </div>
            <div className="mr-8 text-4xl font-poppins text-[#ffa60066]">
              VIP
            </div>
          </div>

          <div className="end-content pb-2 flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">Joined 02/10/2021</div>
            <div className="m-2 text-xs text-gray-500">
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-blue-500 cursor-pointer">
                Profile
              </span>
              <span className="ml-2 border rounded-lg px-2.5 py-1.5 text-white bg-red-500 cursor-pointer">
                Remove
              </span>
            </div>
          </div>
        </div>
        {/* End Box */}
      </div>
    </>
  );
};

export default Page6;
