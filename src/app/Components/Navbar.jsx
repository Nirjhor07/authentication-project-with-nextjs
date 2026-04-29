"use client";
import Link from "next/link";
import userAvatar from "../../assets/user.png";
import Image from "next/image";
import ActiveNavLink from "./shared/NavLinkActive/ActiveNavLink";
const Navbar = () => {
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
      <div className="flex items-center justify-center gap-2">
        <Image src={userAvatar} width={50} height={50} alt="userAvatar" />
        <Link href={"/login"}>
          <button className="btn btn-primary">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
