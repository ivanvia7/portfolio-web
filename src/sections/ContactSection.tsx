import SectionHeader from "../partials/SectionHeader";
import BlockHeader from "../partials/BlockHeader";
import UrlIconLabel from "../partials/UrIIconLabel";
import ActiveLabelUrl from "../partials/ActiveLabelUrl";

import "./Section.css";

const ContactSection = () => {
  return (
    <>
      <div className="contact-section-wrapper" id="contact-section">
        <SectionHeader header="Contact" />
        <BlockHeader header="Let's work together!" />
        <div className="contact-section-content">
          <ActiveLabelUrl
            firstRaw="Connect with me"
            secondRaw="ivanvia.work@gmail.com"
            url="mailto:ivanvia.work@gmail.com"
          />
          <UrlIconLabel
            text="Visit my GitHub"
            url="https://github.com/ivanvia7"
          />
          <UrlIconLabel
            text="Let's connect on LinkedIn"
            url="https://www.linkedin.com/in/ivan-via/"
          />
          <UrlIconLabel
            text="Apify Profile"
            url="https://apify.com/scraping_samurai"
          />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
