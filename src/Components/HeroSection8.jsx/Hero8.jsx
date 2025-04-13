import HeroContent8 from "./HeroContent8";
import Sidebar from "../Sidebar";
const Hero = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent8></HeroContent8>
    </div>
  );
};

export default Hero;
