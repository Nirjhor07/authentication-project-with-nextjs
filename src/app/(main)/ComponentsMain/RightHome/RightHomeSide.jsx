import { FaGithub, FaGoogle } from "react-icons/fa";
import Adds from "./Adds";

const RightHomeSide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Login with </h2>

      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-400">
          <FaGoogle /> Log in with google
        </button>
        <button className="btn">
          <FaGithub /> Log in with github
        </button>
      </div>

      <div className="mt-4">
        <Adds />
      </div>
    </div>
  );
};

export default RightHomeSide;
