import pdf from "../../../public/assets/pdf.svg"
import psd from "../../../public/assets/psd.svg"
import avi from "../../../public/assets/avi.svg"
import eps from "../../../public/assets/eps.svg"
import dll from "../../../public/assets/dll.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons" 
const Page7 = () => {
  return (
    <>
      <h1 className="heading-h1 fade-in">Files</h1>
      <div className="Files-Page flex flex-row-reverse mx-4 max-md:flex-col max-md:mx-4 ">
        <div className="content-2  min-w-[15rem]">
          <div className="bg-whitepx-4 ml-2 py-5 rounded-lg shadow-xl">
            <h1 className="text-bold text-xl  mb-6">Files Statistics</h1>
            {/* Start PD */}
            <div className="row-box flex justify-between items-center border p-2 rounded-lg mb-2">
              <div className="flex flex-row">
                <img className="w-7 mr-2" src={pdf} alt="" />
                <div className="flex flex-col text-xs">
                  <span>Pdf Files</span>
                  <span className="text-gray-400">130</span>
                </div>
              </div>
              <div>
                <p className="text-sm">6.5 GB</p>
              </div>
            </div>
            {/* End PD */}
            {/* Start PD */}
            <div className="row-box flex justify-between items-center border p-2 rounded-lg mb-2">
              <div className="flex flex-row">
                <img className="w-7 mr-2" src={eps} alt="" />
                <div className="flex flex-col text-xs">
                  <span>eps Files</span>
                  <span className="text-gray-400">13</span>
                </div>
              </div>
              <div>
                <p className="text-sm">2 GB</p>
              </div>
            </div>
            {/* End PD */}
            {/* Start PD */}
            <div className="row-box flex justify-between items-center border p-2 rounded-lg mb-2">
              <div className="flex flex-row">
                <img className="w-7 mr-2" src={dll} alt="" />
                <div className="flex flex-col text-xs">
                  <span>dll Files</span>
                  <span className="text-gray-400">50</span>
                </div>
              </div>
              <div>
                <p className="text-sm">70 GB</p>
              </div>
            </div>
            {/* End PD */}
            {/* Start PD */}
            <div className="row-box flex justify-between items-center border p-2 rounded-lg mb-2">
              <div className="flex flex-row">
                <img className="w-7 mr-2" src={psd} alt="" />
                <div className="flex flex-col text-xs">
                  <span>psd Files</span>
                  <span className="text-gray-400">55</span>
                </div>
              </div>
              <div>
                <p className="text-sm">5 GB</p>
              </div>
            </div>
            {/* End PD */}
            <div className="text-center mt-3">
              <button className="text-center w-fit px-4 py-1 border rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="content-1 flex-1 max-md:w-full ">
          <div
            className="w-full grid 
                            2xl:grid-cols-6
                            xl:grid-cols-5
                            lg:grid-cols-3
                            max-lg:grid-cols-1
                            max-md:grid-cols-2
                            md:grid-cols-2
                                                       "
          >
            {/* Box 1 - Variant 1 (pdf) */}
            <div
              className="bg-white group p-10 
              card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.pdf'] before:bottom-[-1.5rem] before:text-sm ">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={pdf}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Mahmoud</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>22/06/2025</p>
                <p>5.5MB</p>
              </div>
            </div>
            {/* End Box 1 */}

            {/* Box 2 - Variant 2 (avi) */}
            <div
              className="bg-white group p-10 
              card pb-5 relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={avi}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Ali</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>12/04/2022</p>
                <p>2MB</p>
              </div>
            </div>
            {/* End Box 2 */}

            {/* Box 3 - Variant 1 (pdf) */}
            <div
              className="bg-white group p-10
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.pdf'] before:bottom-[-1.5rem] before:text-sm ">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={pdf}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Karim</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>01/01/2026</p>
                <p>5.5MB</p>
              </div>
            </div>
            {/* End Box 3 */}

            {/* Box 4 - Variant 3 (avi/eps) */}
            <div
              className="bg-white group p-10
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={eps}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Zain</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>16/02/2024</p>
                <p>222MB</p>
              </div>
            </div>
            {/* End Box 4 */}

            {/* Box 5 - Variant 3 (avi/eps) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={eps}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Omar</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>05/09/2023</p>
                <p>222MB</p>
              </div>
            </div>
            {/* End Box 5 */}

            {/* Box 6 - Variant 5 (dell) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.dell'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={dll}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Nour</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>17/08/2018</p>
                <p>11MB</p>
              </div>
            </div>
            {/* End Box 6 */}

            {/* Box 7 - Variant 6 (dell/png) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.dell'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src="/imgs/png.svg"
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Lina</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>25/12/2022</p>
                <p>19MB</p>
              </div>
            </div>
            {/* End Box 7 */}

            {/* Box 8 - Variant 4 (psd) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.psd'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={psd}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Fadi</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>30/11/2020</p>
                <p>115MB</p>
              </div>
            </div>
            {/* End Box 8 */}

            {/* Box 9 - Variant 2 (avi) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={avi}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Sara</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>14/03/2021</p>
                <p>2MB</p>
              </div>
            </div>
            {/* End Box 9 */}

            {/* Box 10 - Variant 4 (psd) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.psd'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={psd}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Dana</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>09/09/2019</p>
                <p>115MB</p>
              </div>
            </div>
            {/* End Box 10 */}

            {/* Box 11 - Variant 6 (dell/png) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.dell'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src="/imgs/png.svg"
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Tariq</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>20/10/2023</p>
                <p>19MB</p>
              </div>
            </div>
            {/* End Box 11 */}

            {/* Box 12 - Variant 5 (dell) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.dell'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={dll}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Rana</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>11/11/2017</p>
                <p>11MB</p>
              </div>
            </div>
            {/* End Box 12 */}

            {/* Box 13 - Variant 1 (pdf) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.pdf'] before:bottom-[-1.5rem] before:text-sm ">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={pdf}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Bassam</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>03/05/2025</p>
                <p>5.5MB</p>
              </div>
            </div>
            {/* End Box 13 */}

            {/* Box 14 - Variant 2 (avi) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={avi}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Rima</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>27/08/2020</p>
                <p>2MB</p>
              </div>
            </div>
            {/* End Box 14 */}

            {/* Box 15 - Variant 4 (psd) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.psd'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={psd}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Yara</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>07/12/2019</p>
                <p>115MB</p>
              </div>
            </div>
            {/* End Box 15 */}

            {/* Box 16 - Variant 6 (dell/png) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.dell'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src="/imgs/png.svg"
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Ibrahim</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>13/03/2023</p>
                <p>19MB</p>
              </div>
            </div>
            {/* End Box 16 */}

            {/* Box 17 - Variant 4 (psd) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.psd'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={psd}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Nabil</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>05/05/2018</p>
                <p>115MB</p>
              </div>
            </div>
            {/* End Box 17 */}

            {/* Box 18 - Variant 5 (dell) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.dell'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={dll}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Lulu</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>29/07/2016</p>
                <p>11MB</p>
              </div>
            </div>
            {/* End Box 18 */}

            {/* Box 19 - Variant 3 (avi/eps) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={eps}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Hani</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>23/07/2024</p>
                <p>222MB</p>
              </div>
            </div>
            {/* End Box 19 */}

            {/* Box 20 - Variant 2 (avi) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={avi}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Khalid</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>22/09/2021</p>
                <p>2MB</p>
              </div>
            </div>
            {/* End Box 20 */}
            {/* Box 21 - Variant 1 (pdf) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.pdf'] before:bottom-[-1.5rem] before:text-sm ">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={pdf}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Amal</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>10/10/2025</p>
                <p>5.5MB</p>
              </div>
            </div>
            {/* End Box 21 */}

            {/* Box 22 - Variant 2 (avi) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.avi'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={avi}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Sami</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>15/08/2023</p>
                <p>2MB</p>
              </div>
            </div>
            {/* End Box 22 */}

            {/* Box 23 - Variant 4 (psd) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.psd'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={psd}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Mona</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>22/02/2022</p>
                <p>115MB</p>
              </div>
            </div>
            {/* End Box 23 */}

            {/* Box 24 - Variant 5 (dell) */}
            <div
              className="bg-white group p-10 
card pb-5  relative mt-3 rounded-md "
            >
              <div className="DOUNLOAD absolute top-1 left-3">
                <FontAwesomeIcon className="text-gray-600" icon={faDownload} />
              </div>
              <div className="heading w-full flex justify-center relative before:absolute before:content-['my-file.dell'] before:bottom-[-1.5rem] before:text-sm">
                <img
                  className="w-16 group-hover:rotate-12 transition-transform"
                  src={dll}
                  alt="no img"
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm ml-[-25px]">Firas</p>
              <div className="end-content flex justify-between items-center pt-4 mt-2 border-t text-gray-500 text-sm">
                <p>05/05/2020</p>
                <p>11MB</p>
              </div>
            </div>
            {/* End Box 24 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page7;
