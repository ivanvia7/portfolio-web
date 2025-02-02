import SectionHeader from "../partials/SectionHeader";
import ActiveLabelUrl from "../partials/ActiveLabelUrl";
import UrlIconLabel from "../partials/UrIIconLabel";
import ActiveLabelNoUrl from "../partials/ActiveLabelNoUrl";
import "./Section.css";

const AboutSection = () => {
  return (
    <>
      <div className="about-section-wrapper" id="about-section">
        <SectionHeader header="About" />
        <div className="section-content-body">
          <div className="section-about-left">
            <div className="section-testimonial">
              <p className="about-testimonial-text">
                “...Ivan has always proved to be very smart, reliable and hard
                working guy, constantly demonstrating his high communication and
                presentation skills”
              </p>
              <p className="about-testimonial-label lo-text">
                - Martin Hoffman, Innovation Process Design Lead at MSD
              </p>
            </div>
            <div className="about-container-links">
              <ActiveLabelNoUrl
                firstRaw="Product Developer"
                secondRaw="UX/UI Design"
              />
              <ActiveLabelUrl
                firstRaw="Connect with me"
                secondRaw="ivanvia.work@gmail.com"
                url="mailto:ivanvia.work@gmail.com"
              />
              <UrlIconLabel
                text="LinkedIn"
                url="mailto:ivanvia.work@gmail.com"
              />
            </div>
          </div>
          <div className="section-about-right">
            <p className="section-about-description lo-text">
              I am self-taught software engineer with expertise in TypeScript,
              JavaScript, and React. Passionate about technology and building
              technical solutions.
            </p>
            <p className="section-about-description lo-text">
              I bring one year of hands-on experience in Experience Design and
              another year as a proactive technical account manager at a SaaS
              startup, where I ensured seamless operation of web scraping
              solutions for clients.
            </p>
            <p className="section-about-description lo-text">
              I hold a Bachelor’s degree in Business Administration from the
              Prague University of Economics and Business and am fluent in
              Czech, English, Russian.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
