"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Adds from "./Adds";
import { authClient } from "@/lib/auth-client";

const RightHomeSide = () => {
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Login with </h2>

      <div className="flex flex-col gap-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn border-blue-500 text-blue-400"
        >
          <FaGoogle /> Log in with google
        </button>
        <button onClick={handleGithubSignIn} className="btn">
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
