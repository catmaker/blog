import React from "react";

type Props = {
  image: string | null;
};

const Avatar = ({ image }: Props) => {
  return (
    <div className="w-10 h-10 rounded-full">
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="rounded-full p-[0.1rem]"
        src={image ?? undefined}
        alt="profile"
      />
    </div>
  );
};

export default Avatar;
