import Sidebar from "../Sidebar.jsx";
import HeroContent2 from "../HeroSection2/HeroContent2";
const Profile = () => {
  return (
    <div className="flex-auto w-full  overflow-hidden flex overflow-y-auto custom-scrollbar   ">
      <Sidebar></Sidebar>
      <HeroContent2></HeroContent2>
    </div>
  );
}

export default Profile