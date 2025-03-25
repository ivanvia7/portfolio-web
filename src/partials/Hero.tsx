import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-wrapper">
          <h1 className="hero-header">
            Transforming <br />
            ideas into reality today
          </h1>
          <svg
            className="hero-svg"
            width="93"
            height="91"
            viewBox="0 0 93 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hero-svg"
              opacity="0.5"
              d="M45.9541 0V89M45.9541 89L91.3622 43.5918M45.9541 89L1 43.5918"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p className="hero-subtitle lo-text">
          Through two years of experience in IT and collaboration with clients
          on their special projects.
        </p>
      </div>
    </>
  );
};

export default Hero;
