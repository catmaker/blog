import React from "react";
import Image from "next/image";

type LogoIconProps = {
  className?: string;
  width: number;
  height: number;
};

const LogoIcon: React.FC<LogoIconProps> = ({ className, width, height }) => {
  return (
    <div className={className}>
      <Image
        src={"img/catmaker.svg"}
        alt="logo"
        width={width}
        height={height}
      ></Image>
    </div>
  );
};

export default LogoIcon;
