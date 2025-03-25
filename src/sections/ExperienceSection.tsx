import SectionHeader from "../partials/SectionHeader";
import ExperienceModule from "../partials/ExperienceModule";

import "./Section.css";

const ExperienceSection = () => {
  return (
    <>
      <div className="experience-section-wrapper" id="experience-section">
        <SectionHeader header="Experience" />
        <div className="experience-modules-wrapper">
          <ExperienceModule
            companyName="Apify"
            experienceTimeline="2024 - Present"
            position="Technical Product Advocate"
            location="Prague, Czech Republic"
            website="www.apify.com"
            websiteUrl="https://apify.com/"
            companyDescription="Full-stack web scraping and web automation platform"
            experienceDescription="As a member of the Product Advocacy team, I manage a portfolio of 150 clients with 1.5 million annual recurring revenue. My main tasks were monitoring the performance of scraping solutions, upselling, renewing the contracts, troubleshooting the bugs, and arranging technical calls."
          />
          <ExperienceModule
            companyName="MSD Czech Republic"
            experienceTimeline="2023 - 2024"
            position="Design Thinker"
            location="Prague, Czech Republic"
            website="www.msd.cz"
            websiteUrl="https://www.msd.cz/cs/"
            companyDescription="American multinational pharmaceutical company"
            experienceDescription="I have designed and taught UX design systems for corporate teams, integrating them into daily workflows to ensure user-first decision-making at scale. To drive adoption, we developed targeted workshops and training sessions for executive teams while also collaborating with the Experience Design department to refine and enhance the existing design thinking process."
          />
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
