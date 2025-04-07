import course_01 from "../../../public/assets/course-01.jpg";
import course_02 from "../../../public/assets/course-02.jpg";
import course_03 from "../../../public/assets/course-03.jpg";
import course_04 from "../../../public/assets/course-04.jpg";
import course_05 from "../../../public/assets/course-05.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Page5 = () => {
  return (
    <>
      <p className="heading-h1 fade-in">Courses</p>
      <div
        className="Courses-Page grid 
                      3xl:grid-cols-5
                      2xl:grid-cols-5
                      xl:grid-cols-3
                      lg:grid-cols-3
                      lg:mx-6
                      md:grid-cols-2
                      sm:grid-cols-1
                      "
      >
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_01} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">Mastering Web Design</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Master The Art Of Web Designing And Mocking, Prototyping And
              Creating Web Design Architecture
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              950
            </div>
            <div className="m-2 text-xs text-gray-500">$ 950</div>
          </div>
        </div>
        {/* End Box */}

        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_02} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">Data Structure And Algorithms</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Master The Art Of Data Strcuture And Famous Algorithms Like
              Sorting, Dividing And Conquering
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              1150
            </div>
            <div className="m-2 text-xs text-gray-500">$ 222</div>
          </div>
        </div>
        {/* End Box */}

        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_03} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">
              {" "}
              <h3 className="ml-4 my-4">Data Structure And Algorithms</h3>
            </h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Mastering Responsive Web Design And Media Queries And Know
              Everything About Breakpoints
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              650
            </div>
            <div className="m-2 text-xs text-gray-500">$ 90</div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_04} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">Mastering Python</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Mastering Python To Prepare For Data Science And AI And Automating
              Things in Your Life
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              950
            </div>
            <div className="m-2 text-xs text-gray-500">$ 250</div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_05} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">PHP Examples</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              PHP Tutorials And Examples And Practice On Web Application And
              Connecting With Databases
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              850
            </div>
            <div className="m-2 text-xs text-gray-500">$ 150</div>
          </div>
        </div>
        {/* End Box */}

        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_02} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">Data Structure And Algorithms</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Master The Art Of Data Strcuture And Famous Algorithms Like
              Sorting, Dividing And Conquering
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              1150
            </div>
            <div className="m-2 text-xs text-gray-500">$ 222</div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_01} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">Mastering Web Design</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Master The Art Of Web Designing And Mocking, Prototyping And
              Creating Web Design Architecture
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              950
            </div>
            <div className="m-2 text-xs text-gray-500">$ 950</div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_05} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">PHP Examples</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              PHP Tutorials And Examples And Practice On Web Application And
              Connecting With Databases
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              850
            </div>
            <div className="m-2 text-xs text-gray-500">$ 150</div>
          </div>
        </div>
        {/* End Box */}
        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_03} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">
              {" "}
              <h3 className="ml-4 my-4">Data Structure And Algorithms</h3>
            </h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Mastering Responsive Web Design And Media Queries And Know
              Everything About Breakpoints
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              650
            </div>
            <div className="m-2 text-xs text-gray-500">$ 90</div>
          </div>
        </div>
        {/* End Box */}

        {/* Start Box */}
        <div className="box bg-white card rounded-lg mx-2 relative">
          <div className="image">
            <img src={course_04} alt="no img" />
          </div>
          <div className="">
            <h3 className="ml-4 my-4">Mastering Python</h3>
            <p className="text-sm text-gray-400 ml-4 ">
              Mastering Python To Prepare For Data Science And AI And Automating
              Things in Your Life
            </p>
          </div>
          <div
            className="border-b relative border-gray-400 mt-6 w-full     bottom-[5%] h-10 
                before:content-['Content-Info']
                before:absolute
                before:bg-violet-500
                before:text-white
                  before:top-1/2
                  before:left-1/2
                  before:translate-x-[-50%]
                  before:translate-y-[40%]
                  before:px-2
                  before:py-1
                  before:rounded-xl
                  before:text-xs
                  before:cursor-pointer

                      "
          ></div>
          <div className="end-content flex justify-between items-center">
            <div className="m-2 text-xs text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              950
            </div>
            <div className="m-2 text-xs text-gray-500">$ 250</div>
          </div>
        </div>
        {/* End Box */}
      </div>
    </>
  );
};

export default Page5;
