import Hedar from "../Components/Hedar";
import Navbar from "../Components/Navbar";
import BrekingNews from "../Components/shared/BrekingNews";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Hedar />
      <BrekingNews></BrekingNews>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
