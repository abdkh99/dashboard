import HeroContent from "./HeroContent"
import Sidebar from "../sidebar"
const Hero = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent>
      </HeroContent>
    </div>
  );
}

export default Hero