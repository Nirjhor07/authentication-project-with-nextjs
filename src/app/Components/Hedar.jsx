import Image from "next/image";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Hedar = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2.5 py-4">
      <Image src={logo} height={200} width={400} alt="logo"></Image>
      <h2 className="text-xl">Journalism Without Fear or Favor</h2>
      <p className="text-xl">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Hedar;
