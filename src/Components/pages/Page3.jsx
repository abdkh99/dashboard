import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from "../ToggleSwitch";
import avatar from "../../../public/assets/avatar.png"
import activity_01 from "../../../public/assets/activity-01.png"
import activity_02 from "../../../public/assets/activity-02.png"
import activity_03 from "../../../public/assets/activity-03.png"
const Page3 = () => {
  return (
    <>
      <h1 className="heading-h1 fade-in">Profile</h1>
      <div className="profile-page mx-3 text-black">
        <div className="card bg-white rounded-lg flex items-center max-lg:flex-col">
          <div className="avatar-box lg:border-r border-gray-200 p-20 text-center max-lg:pb-1 ">
            <img className="w-32 rounded-full" src={avatar} alt="no image" />
            <h3 className="m-0 font-lato font-bold mt-2">Abd kh</h3>
            <p className="text-gray-400 m-0 mb-1">devoloper</p>
            <div className="level rounded-lg bg-gray-300  relative h-2 overflow-hidden m-auto w-[70%]">
              <span className="w-[77%] absolute top-0 left-0 h-full bg-blue-500 rounded-3xl"></span>
            </div>
            <div className="rating mt-5 mb-2 ">
              <FontAwesomeIcon className="text-orange-500 ml-1" icon={faStar} />
              <FontAwesomeIcon className="text-orange-500 ml-1" icon={faStar} />
              <FontAwesomeIcon className="text-orange-500 ml-1" icon={faStar} />
              <FontAwesomeIcon className="text-orange-500 ml-1" icon={faStar} />
              <FontAwesomeIcon className="text-orange-500 ml-1" icon={faStar} />
            </div>
            <p className="text-gray-400">450 Rating</p>
          </div>
          <div className="Info-box w-full max-lg:text-center">
            {/* Information row */}
            <div className="box p-10  flex items-center hover:bg-gray-100 flex-wrap border-b border-b-gray-300 transition-colors">
              <h1 className="w-full m-0 font-bold text-black ">
                General Information
              </h1>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>full Name :</span>
                <span>Abd Kh</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>Country: </span>
                <span> Egypt</span>
              </div>
              <div className="text-md lg:min-w-[200px] max-lg:w-full">
                <span>Gender: </span>
                <span>Male</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <ToggleSwitch />
              </div>
            </div>
            {/*End Information row */}

            {/* Information row */}
            <div className="box p-10 flex  items-center hover:bg-gray-100 flex-wrap border-b border-b-gray-300 transition-colors">
              <h1 className="w-full m-0 font-bold text-black ">
                Personal Information
              </h1>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>Email: </span>
                <span>a@alc.sa</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>Phone: </span>
                <span> 0123456789</span>
              </div>
              <div className="text-md lg:min-w-[200px] max-lg:w-full">
                <span>Date Of Birth: </span>
                <span>15/7/2004</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <ToggleSwitch />
              </div>
            </div>
            {/*End Information row */}
            {/* Information row */}
            <div className="box p-10 flex items-center hover:bg-gray-100 flex-wrap border-b border-b-gray-300 transition-colors">
              <h1 className="w-full m-0 font-bold text-black ">
                Job Information
              </h1>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>Title: </span>
                <span>Full Stack Developer</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>Programming Language: </span>
                <span> Python</span>
              </div>
              <div className="text-md lg:min-w-[200px] max-lg:w-full">
                <span>Years Of Experience: </span>
                <span>2+</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <ToggleSwitch />
              </div>
            </div>
            {/*End Information row */}
            {/* Information row */}
            <div className="box p-10 flex items-center hover:bg-gray-100 flex-wrap  transition-colors">
              <h1 className="w-full m-0 font-bold text-black ">
                Billing Information
              </h1>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>Payment Method: </span>
                <span>Paypal</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <span>Email : </span>
                <span> email@website.com</span>
              </div>
              <div className="text-md lg:min-w-[200px] max-lg:w-full">
                <span>Subscription: </span>
                <span>Monthly</span>
              </div>
              <div className="text-md lg:min-w-[300px] max-lg:w-full">
                <ToggleSwitch />
              </div>
            </div>
            {/*End Information row */}
          </div>
        </div>
        {/* Start Other Data */}
        <div className="card other-data flex gap-6 max-md:flex-col ">
          <div className="skills-card p-8 bg-white rounded-lg mt-4 min-w-[30%]">
            <h2 className="md:text-3xl max-md:text-2xl font-bold font-cairo ">
              My Skills
            </h2>
            <p>Complete Skills List</p>
            <ul className="max-md:text-center m-0">
              <li className="mt-2 border-b pb-4 text-center flex flex-wrap">
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Html
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Pugjs
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Hamal
                </span>
              </li>
              <li className="mt-2 border-b pb-4 text-center flex flex-wrap">
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  CSS
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  SASS
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  STYLUS
                </span>
              </li>
              <li className="mt-2 border-b pb-4 text-center  flex flex-wrap">
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  JAVASCRIPT
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  TYPESCRIPT
                </span>
              </li>
              <li className="mt-2 border-b pb-4 text-center  flex flex-wrap">
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Vuejs
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Reactjs
                </span>
              </li>
              <li className="mt-2 border-b pb-4 text-center flex flex-wrap">
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Html
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Pugjs
                </span>
              </li>
              <li className="mt-2 border-b pb-4 text-center flex flex-wrap">
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Jest
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Jasmine
                </span>
              </li>
              <li className="mt-2 border-b pb-4 text-center flex flex-wrap">
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  PHP
                </span>
                <span className="mx-2 my-1  bg-[#eee] px-2 py-1 rounded-lg">
                  Laravel
                </span>
              </li>
            </ul>
          </div>
          {/* Start Last Activities */}
          <div className="activities p-8 bg-white rounded-lg mt-4 flex-grow">
            <h2 className="font-bold text-xl">Latest Activities</h2>
            <p className="text-gray-400 font-roboto">
              Latest Activities Done By The User
            </p>
            {/* Start New Row */}
            <div className="activity max-md:text-center flex items-center mt-4 border-b pb-4 max-md:flex-col max-md:items-center">
              <img className="w-16 mr-4" src={activity_01} alt="no image" />
              <div className="info flex flex-col ">
                <span className="font-bold text-lg md:text-start">Store</span>
                <span className="text-gray-600">
                  Bought The Mastering Python Course
                </span>
              </div>
              <div className="Date flex flex-col md:ml-auto">
                <span className="text-center font-mono ">18:10</span>
                <span className="font-semibold">Yesterday</span>
              </div>
            </div>
            {/* end The Row */}
            {/* Start New Row */}
            <div className="activity max-md:text-center flex items-center mt-4 border-b pb-4 max-md:flex-col max-md:items-center">
              <img className="w-16 mr-4" src={activity_02} alt="no image" />
              <div className="info flex flex-col ">
                <span className="font-bold text-lg md:text-start">Academy</span>
                <span className="text-gray-600">Got The PHP Certificate</span>
              </div>
              <div className="Date flex flex-col md:ml-auto">
                <span className="text-center font-mono ">16:05</span>
                <span className="font-semibold">Yesterday</span>
              </div>
            </div>
            {/* end The Row */}
            {/* Start New Row */}
            <div className="activity max-md:text-center flex items-center mt-4 border-b pb-4 max-md:flex-col max-md:items-center">
              <img className="w-16 mr-4" src={activity_03} alt="no image" />
              <div className="info flex flex-col ">
                <span className="font-bold text-lg md:text-start">Badges</span>
                <span className="text-gray-600">
                  Unlocked The 10 Skills Badge
                </span>
              </div>
              <div className="Date flex flex-col md:ml-auto">
                <span className="text-center font-mono ">18:15</span>
                <span className="font-semibold">Yesterday</span>
              </div>
            </div>
            {/* end The Row */}
            {/* Start New Row */}
            <div className="activity max-md:text-center flex items-center mt-4 border-b pb-4 max-md:flex-wr max-md:flex-col max-md:items-center ">
              <img className="w-16 mr-4" src={activity_01} alt="no image" />
              <div className="info flex flex-col ">
                <span className="font-bold text-lg md:text-start ">Store</span>
                <span className="text-gray-600">
                  Bought The Mastering Python Course
                </span>
              </div>
              <div className="Date flex flex-col md:ml-auto">
                <span className="text-center font-mono ">01:10</span>
                <span className="font-semibold">Yesterday</span>
              </div>
            </div>
            {/* end The Row */}
          </div>
        </div>
        {/* End Other Data */}
      </div>
    </>
  );
};

export default Page3;
