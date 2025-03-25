import React from "react";
import "./Label.css";

interface ActiveLabelNoUrlProps extends React.HTMLAttributes<HTMLDivElement> {
  firstRaw: string;
  secondRaw: string;
}

const ActiveLabelNoUrl: React.FC<ActiveLabelNoUrlProps> = ({
  firstRaw,
  secondRaw,
  className,
  ...props
}) => {
  return (
    <div className={`active-label-wrapper ${className || ""}`} {...props}>
      <p className="active-label-first-raw">{firstRaw}</p>
      <p className="active-label-second-raw">{secondRaw}</p>
      <div className="active-label-divider divider-color"></div>
    </div>
  );
};

export default ActiveLabelNoUrl;
