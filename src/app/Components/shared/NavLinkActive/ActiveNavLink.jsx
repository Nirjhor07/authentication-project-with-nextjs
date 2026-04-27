"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = ({ href, children }) => {
  const pathname = usePathname();
  //   console.log(pathname);
  const isActive = href === pathname;
  return (
    <div className={isActive ? "text-blue-500" : ""}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default ActiveNavLink;
