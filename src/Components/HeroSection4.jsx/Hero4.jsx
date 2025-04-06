import HeroContent4 from "./HeroContent4";
import Sidebar from "../Sidebar";
const Hero = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent4></HeroContent4>
    </div>
  );
};

export default Hero;
