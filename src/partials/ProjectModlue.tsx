interface ProjectModuleProps {
  projectName: string;
  projectDescription: string;
  processTag: string;
  year: string;
  imageUrl: string;
  imageSide: "left" | "right";
  projectUrlLabel: string;
  projectUrlString: string;
  projectUrlLabelSecond: any;
  projectUrlStringSecond: any;
}

import "../sections/Section.css";
import UrlIconLabel from "./UrIIconLabel";
import "./ProjectModule.css";

const ProjectModule: React.FC<ProjectModuleProps> = ({
  projectName,
  projectDescription,
  processTag,
  year,
  imageUrl,
  imageSide,
  projectUrlLabel,
  projectUrlString,
  projectUrlLabelSecond,
  projectUrlStringSecond,
}) => {
  return (
    <>
      <div className={`project-wrapper image-side-${imageSide}`}>
        <div className="project-text-wrapper">
          <h3 className="project-header">{projectName}</h3>
          <p className="project-label">
            {processTag} • {year}
          </p>
          <p className="project-description">{projectDescription}</p>
          <div className="project-labels-wrapper">
            <UrlIconLabel text={`${projectUrlLabel}`} url={projectUrlString} />
            {projectUrlLabelSecond && projectUrlStringSecond && (
              <UrlIconLabel
                text={projectUrlLabelSecond}
                url={projectUrlStringSecond}
              />
            )}
          </div>
        </div>
        <div className="project-image-wrapper">
          <img src={imageUrl} alt="project-image" className="project-image" />
        </div>
      </div>
    </>
  );
};

export default ProjectModule;
