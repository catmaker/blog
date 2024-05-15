import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const menuItems = ["New", "Categories", "Reviews", "Contact"];
  return (
    <div className="flex items-center mt-6 mb-6">
      <Link href={`/`}>
        <Image
          className="cursor-pointer hover:scale-90 duration-150"
          src={"img/catmaker.svg"}
          alt="logo"
          width={70}
          height={70}
        ></Image>
      </Link>
      <ul className="flex w-full gap-8 ml-8 ">
        {menuItems.map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase()}`}>
            <li className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg  transition-colors duration-150 text-base">
              {item}
            </li>
          </Link>
        ))}
      </ul>
      <Image
        className="cursor-pointer hover:scale-90 duration-150"
        src={"img/search.svg"}
        alt="search_icon"
        width={27}
        height={27}
      ></Image>
    </div>
  );
};

export default Header;
