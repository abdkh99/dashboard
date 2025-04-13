import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Page8 = () => {

  return (
    <>
      <p className="heading-h1 fade-in">Plans</p>
      <div className="content grid :grid-cols-3 gap-4">
        {/* Start Box */}
        <div className="box p-5 card bg-white m-2">
          <div className="head w-full h-28 bg-green-500 text-white flex items-center justify-center outline outline-green-500 outline-3 outline-offset-4">
            <div>
              <h1 className="text-3xl font-poppins ml-3">Free</h1>
              <p className="relative text-5xl before:content-['$'] before:absolute before:top-0 before:text-2xl before:left-[-1rem]">
                0.00
              </p>
            </div>
          </div>
          <div className="row flex justify-between items-center mt-10 border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All Text Lessons</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All videos Lessons</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Browse Content Without Ads</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All Assignments</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faX}
                />
              </span>
              <p className="font-poppins text-sm">Get Daily Prizes</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faX}
                />
              </span>
              <p className="font-poppins text-sm">Earn Certificate</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faX}
                />
              </span>
              <p className="font-poppins text-sm">Browse Content Without Ads</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faX}
                />
              </span>
              <p className="font-poppins text-sm">Access Badge System</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faX}
                />
              </span>
              <p className="font-poppins text-sm">
                1 GB Space For Hosting Files
              </p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <button className="bg-green-400 py-2 px-5 rounded-lg text-white hover:bg-green-500 transition-colors">
            Join
          </button>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box p-5 card bg-white m-2">
          <div className="head w-full h-28 bg-blue-500 text-white flex items-center justify-center outline outline-blue-500 outline-3 outline-offset-4">
            <div>
              <h1 className="text-3xl font-poppins ml-3">Basic</h1>
              <p className="relative text-5xl before:content-['$'] before:absolute before:top-0 before:text-2xl before:left-[-1rem]">
                7.99
              </p>
            </div>
          </div>
          <div className="row flex justify-between items-center mt-10 border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All Text Lessons</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All videos Lessons</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Browse Content Without Ads</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All Assignments</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Get Daily Prizes</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Earn Certificate</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Browse Content Without Ads</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faX}
                />
              </span>
              <p className="font-poppins text-sm">Access Badge System</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-red-500 font-extrabold mr-2 text-md"
                  icon={faX}
                />
              </span>
              <p className="font-poppins text-sm">
                1 GB Space For Hosting Files
              </p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <button className="bg-blue-400 py-2 px-5 rounded-lg text-white hover:bg-blue-500 transition-colors">
            Join
          </button>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box p-5 card bg-white m-2">
          <div className="head w-full h-28 bg-indigo-500 text-white flex items-center justify-center outline outline-indigo-500 outline-3 outline-offset-4">
            <div>
              <h1 className="text-3xl font-poppins font-bold translate-x-[rem]">
                Premium
              </h1>
              <p className="relative text-5xl before:content-['$'] before:absolute before:top-0 before:text-2xl before:left-[-1rem]">
                19.99
              </p>
            </div>
          </div>
          <div className="row flex justify-between items-center mt-10 border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All Text Lessons</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All videos Lessons</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Browse Content Without Ads</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access All Assignments</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Get Daily Prizes</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Earn Certificate</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Browse Content Without Ads</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">Access Badge System</p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <div className="row flex justify-between items-center border-b mb-4 pb-3">
            <div className="flex ">
              <span className="block">
                <FontAwesomeIcon
                  className="text-blue-500 font-extrabold mr-2 text-md"
                  icon={faCheck}
                />
              </span>
              <p className="font-poppins text-sm">
                1 GB Space For Hosting Files
              </p>
            </div>
            <div className="flex flex-grow-0">
              <FontAwesomeIcon
                className="text-white font-extrabold mr-2 text-3xl bg-gray-500 px-1.5 py-0.5 rounded-full w-1 h-3 cursor-pointer"
                icon={faExclamation}
              />
            </div>
          </div>
          <p className=" py-2 px-5 rounded-lg  text-center ">
            This is Your Current Plan
          </p>
        </div>
        {/* End Box */}
      </div>
    </>
  );
};

export default Page8;
