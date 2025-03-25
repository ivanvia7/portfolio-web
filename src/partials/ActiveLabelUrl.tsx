interface ActiveLabelUrlProps {
  firstRaw: string;
  secondRaw: string;
  url: string;
}

import "./Label.css";

const ActiveLabelUrl: React.FC<ActiveLabelUrlProps> = ({
  firstRaw,
  secondRaw,
  url,
}) => {
  return (
    <>
      <div className="active-label-wrapper">
        <p className="active-label-first-raw">{firstRaw}</p>
        <a href={url} className="active-label-second-raw">
          {secondRaw}
        </a>
        <div className="active-label-divider divider-color"> </div>
      </div>
    </>
  );
};

export default ActiveLabelUrl;
