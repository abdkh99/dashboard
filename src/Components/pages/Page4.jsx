import team_01 from "../../../public/assets/team-01.png";
import team_02 from "../../../public/assets/team-02.png";
import team_03 from "../../../public/assets/team-03.png";
import team_04 from "../../../public/assets/team-04.png";

const Page4 = () => {
  return (
    <>
      <h1 className="heading-h1 fade-in">Projects</h1>
      <div
        className="projects-page grid 
                      max-lg:grid-cols-1
                      lg:gap-2
                      lg:mx-6
                      max-lg:mx-4
                      max-lg:gap-
                      xl:grid-cols-3
                      
                    "
      >
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-4">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Abd Dashboard</p>
              <span className="text-gray-400">
                Abd Dashboard Project Design And Programming And Hosting
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_03}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_04}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Design
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Hosting
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Marketing
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[65%]
                              before:bg-red-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$2500</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Academy Portal</p>
              <span className="text-gray-400">
                Academy Portal Project Design And Programming
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_03}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Design
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[88%]
                              before:bg-green-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$12500</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/6/2025</p>
            <div>
              <p>Chatting Application</p>
              <span className="text-gray-400">
                Chatting Application Project Design
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_03}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[100%]
                              before:bg-blue-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$87</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Ahmed Dashboard</p>
              <span className="text-gray-400">
                Ahmed Dashboard Project Design And Programming And Hosting
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_03}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_04}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Design
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Hosting
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Marketing
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[65%]
                              before:bg-green-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$2500</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Ahmed Portal</p>
              <span className="text-gray-400">
                Ahmed Portal Project Design And Programming
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Design
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[50%]
                              before:bg-green-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$850</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Mohamed Application</p>
              <span className="text-gray-400">
                Mohamed Application Project Design
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[20%]
                              before:bg-red-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$500</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Mohamed Dashboard</p>
              <span className="text-gray-400">
                Mohamed Dashboard Project Design And Programming And Hosting
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_03}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_04}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Design
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Hosting
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Marketing
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[65%]
                              before:bg-green-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$1500</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Mohamed Portal</p>
              <span className="text-gray-400">
                Mohamed Portal Project Design And Programming
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_03}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Design
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Hosting
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Marketing
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[65%]
                              before:bg-green-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$1600</span>
          </div>
        </div>
        {/* End BOX */}
        {/* Start BOX */}
        <div className="Abd-dashboard card w-full p-10 bg-white relative rounded-lg shadow-xl mb-2">
          <div className="heading pb-4 mb-4 border-b">
            <p className="absolute top-4 right-4 text-gray-500"> 4/4/2025</p>
            <div>
              <p>Elzero Dashboard</p>
              <span className="text-gray-400">
                Elzero Dashboard Project Design And Programming And Hosting
              </span>
            </div>
            <div className="flex mt-4">
              <img className="rounded-full w-10" src={team_01} alt="" />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_02}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_03}
                alt=""
              />
              <img
                className="rounded-full w-10 ml-[-1rem]"
                src={team_04}
                alt=""
              />
            </div>
          </div>

          <div className="content flex  top-auto right-10 border-b pb-4 mb-4 ">
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Programming
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Design
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Hosting
            </span>
            <span className="ml-2 text-xs border px-1 py-1 rounded-lg bg-[#eee]">
              Marketing
            </span>
          </div>
          <div className="end flex justify-between items-center translate-y-1/2">
            <span
              className="relative bg-gray-400 w-52 h-2 rounded-lg 
                              before:content-['']
                              before:absolute
                              before:h-full
                              before:w-[100%]
                              before:bg-blue-500
                              before:rounded-lg
                              "
            ></span>
            <span className="text-sm ">$3000</span>
          </div>
        </div>
        {/* End BOX */}
      </div>
    </>
  );
};

export default Page4;
