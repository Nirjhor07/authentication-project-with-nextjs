import Hedar from "../Components/Hedar";
import Navbar from "../Components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Hedar />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
