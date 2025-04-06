import HeroContent7 from "./HeroContent7";
import Sidebar from "../Sidebar";
const Hero = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent7></HeroContent7>
    </div>
  );
};

export default Hero;
