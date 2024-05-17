import React from "react";
import Image from "next/image";

type SearchIconProps = {
  className?: string;
  width?: number;
  height?: number;
};

const searchIcon: React.FC<SearchIconProps> = ({
  className,
  width,
  height,
}) => {
  return (
    <div className={className}>
      <Image
        src={"img/search.svg"}
        alt="search_icon"
        width={width}
        height={height}
      ></Image>
    </div>
  );
};

export default searchIcon;
