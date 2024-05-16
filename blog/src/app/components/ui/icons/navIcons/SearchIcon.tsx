import React from "react";
import Image from "next/image";

type SearchIconProps = {
  className?: string;
};

const searchIcon: React.FC<SearchIconProps> = ({ className }) => {
  return (
    <div className={className}>
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

export default searchIcon;
