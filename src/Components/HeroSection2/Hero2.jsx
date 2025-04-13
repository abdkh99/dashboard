import HeroContent2 from "./HeroContent2";
import Sidebar from "../Sidebar";
const Hero3 = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent2></HeroContent2>
    </div>
  );
};

export default Hero3;
