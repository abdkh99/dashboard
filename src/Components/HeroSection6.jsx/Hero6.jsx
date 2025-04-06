import HeroContent6 from "./HeroContent6";
import Sidebar from "../Sidebar";
const Hero = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent6></HeroContent6>
    </div>
  );
};

export default Hero;
