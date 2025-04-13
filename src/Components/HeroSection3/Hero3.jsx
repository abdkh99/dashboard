import HeroContent3 from "./HeroContent3";
import Sidebar from "../Sidebar";
const Hero = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent3></HeroContent3>
    </div>
  );
};

export default Hero;
