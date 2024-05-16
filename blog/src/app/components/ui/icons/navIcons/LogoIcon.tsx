import React from "react";
import Image from "next/image";

type LogoIconProps = {
  className?: string;
};

const LogoIcon: React.FC<LogoIconProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image src={"img/catmaker.svg"} alt="logo" width={70} height={70}></Image>
    </div>
  );
};

export default LogoIcon;
