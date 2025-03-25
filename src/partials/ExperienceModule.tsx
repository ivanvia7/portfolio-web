import "./ExperienceModule.css";

interface ExperienceModuleProps {
  companyName: string;
  experienceTimeline: string;
  companyDescription: string;
  position: string;
  location: string;
  website: string;
  websiteUrl: string;
  experienceDescription: string;
}

const ExperienceModule: React.FC<ExperienceModuleProps> = ({
  companyName,
  experienceTimeline,
  companyDescription,
  position,
  location,
  website,
  websiteUrl,
  experienceDescription,
}) => {
  return (
    <>
      <div className="experience-module-wrapper">
        <h3 className="experience-header">{companyName}</h3>
        <div className="experience-content-wrapper">
          <div className="company-block">
            <p className="company-oneliner">{companyDescription}</p>
            <p className="experience-timeline">{experienceTimeline}</p>
          </div>
          <div className="tags-wrapper">
            <div className="experience-tag">
              <p className="tag-name lo-opacity">Position:</p>
              <p className="tag-value">{position}</p>
            </div>
            <div className="experience-tag">
              <p className="tag-name lo-opacity">Location:</p>
              <p className="tag-value">{location}</p>
            </div>
            <div className="experience-tag">
              <p className="tag-name lo-opacity">Website:</p>
              <a href={websiteUrl} className="tag-value">
                {website}
              </a>
            </div>
          </div>
          <div className="experience-description-wrapper">
            <p className="experience-description-text">
              {experienceDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceModule;
