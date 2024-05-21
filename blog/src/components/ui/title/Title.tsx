import React from "react";
type Props = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1 className="text-xl pt-8">{title}</h1>
      <p className="text-sm pt-6">{subtitle}</p>
    </div>
  );
};

export default Title;
