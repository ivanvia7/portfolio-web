interface UrlIconLabelProps {
  text: string;
  url: string;
}

import "./Label.css";

const UrlIconLabel: React.FC<UrlIconLabelProps> = ({ text, url }) => {
  return (
    <>
      <div className="active-label-wrapper">
        <div className="label-raw">
          <a href={url} className="active-label-second-raw">
            {text}
          </a>
          <svg
            className="url-label-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M10.6691 6.77614L4.93141 12.5139L3.98861 11.5711L9.72633 5.83333H4.66915V4.5H12.0025V11.8333H10.6691V6.77614Z"
              fill="#F1EDEE"
            />
          </svg>
        </div>
        <div className="active-label-divider divider-color"> </div>
      </div>
    </>
  );
};

export default UrlIconLabel;
