import HeroContent5 from "./HeroContent5";
import Sidebar from "../Sidebar";
const Hero = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent5></HeroContent5>
    </div>
  );
};
export default Hero;
