import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

const BasicButton = ({ text, onClick, className }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default BasicButton;
