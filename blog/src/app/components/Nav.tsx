"use client";

import Link from "next/link";
import LogoIcon from "./ui/icons/navIcons/LogoIcon";
import SearchIcon from "./ui/icons/navIcons/SearchIcon";
import BasicButton from "./ui/button/BasicButton";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  console.log(pathname);
  const menuItems = ["New", "Categories", "Reviews", "Contact"];
  return (
    <div className="flex items-center mt-6 mb-6">
      <Link href={`/`}>
        <LogoIcon className="cursor-pointer hover:scale-90 duration-150" />
      </Link>
      <ul className="flex w-full gap-8 ml-8 ">
        {menuItems.map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase()}`}>
            <li
              className={`hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg  transition-colors duration-150 text-base ${
                pathname === `/${item.toLowerCase()}`
                  ? "bg-pink-500 text-white"
                  : ""
              }`}
            >
              {item}
            </li>
          </Link>
        ))}
        {session ? (
          <BasicButton
            className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg transition-colors duration-150 text-base"
            text="Sign Out"
            onClick={() => signOut()}
          />
        ) : (
          <BasicButton
            className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg transition-colors duration-150 text-base"
            text="Sign In"
            onClick={() => signIn()}
          />
        )}
      </ul>
      <Link href={`/search`}>
        <SearchIcon className="cursor-pointer hover:scale-90 duration-150" />
      </Link>
    </div>
  );
};

export default Nav;
