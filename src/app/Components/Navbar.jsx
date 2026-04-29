"use client";
import Link from "next/link";
import userAvatar from "../../assets/user.png";
import Image from "next/image";
import ActiveNavLink from "./shared/NavLinkActive/ActiveNavLink";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  // console.log(session.user.image);
  const avatar = session?.user.image;
  // console.log(avatar);

  return (
    <div className="flex justify-between container mx-auto">
      <div></div>
      <ul className="flex items-center justify-center gap-2">
        <li>
          <ActiveNavLink href="/"> Home</ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink href="/about"> About</ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink href="/contact">Contact</ActiveNavLink>
        </li>
      </ul>
      {isPending ? (
        "loading...."
      ) : session?.user ? (
        <div className="flex items-center justify-center gap-2">
          <h2>hello, {session?.user.name}</h2>
          <Image
            src={avatar || userAvatar}
            width={50}
            height={25}
            alt="userAvatar"
            className="rounded-xl"
          />

          <button
            onClick={async () => await authClient.signOut()}
            className="btn btn-primary"
          >
            Log out
          </button>
        </div>
      ) : (
        <Link href={"/login"}>
          <button className="btn btn-primary">Log in</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
