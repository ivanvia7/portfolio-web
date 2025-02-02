import SectionHeader from "../partials/SectionHeader";
import ProjectModule from "../partials/ProjectModlue";
import "./Section.css";

const ProjectsSection = () => {
  return (
    <>
      <div className="projects-section-wrapper" id="projects-section">
        <SectionHeader header="Projects" />
        <div className="projects-modules-wrapper">
          <ProjectModule
            projectName="AI Wrappers on Apify"
            processTag="Development"
            year="2025"
            imageSide="right"
            projectUrlLabel="Explore on Apify"
            projectUrlString="https://apify.com/scraping_samurai/dall-e-3-ai-image-generator"
            imageUrl="/dall-e.png"
            projectDescription="This side project was driven by my interest in making AI wrappers to make OpenAI and PerplexityAI API accessible to everyone on Apify. I wanted to create flexible solutions that allow users to integrate AI processing with other scrapers with no effort. My goal was to build containers that interact with my backend, which then calls the appropriate AI services. The project was developed using TypeScript, Express, and MongoDB and deployed on Render to ensure scalability and performance. "
            projectUrlLabelSecond=""
            projectUrlStringSecond=""
          />
          <ProjectModule
            projectName="AI Helper for Gmail"
            processTag="Development, Design"
            year="2024"
            imageSide="left"
            projectUrlLabel="Check GitHub"
            projectUrlString="https://github.com/ivanvia7/portfolio-ai-helper"
            imageUrl="/extension.png"
            projectDescription="This side project originated from my experience as a Customer Success Manager (CSM), where I noticed that native Gmail lacked a feature for summarizing email threads. Motivated to improve productivity, I set out to develop a Google extension that integrates OpenAI and a database, allowing myself and my colleagues to work more efficiently. The project was built using JavaScript, Express, and MongoDB and integrated with OAuth 2.0 to ensure secure and seamless authentication. "
            projectUrlLabelSecond=""
            projectUrlStringSecond=""
          />
          <ProjectModule
            projectName="YourCamp Project"
            processTag="Development, Design"
            year="2024"
            imageSide="right"
            projectUrlLabel="View live"
            projectUrlString="https://yourcamp.onrender.com/"
            imageUrl="/campgrounds.png"
            projectDescription="This side project was developed during a 2024 coding boot camp, where I built a full-stack application for managing listings. The platform enables users to post and share their favorite camps effortlessly.
Built with JavaScript, Express, and MongoDB, the project was deployed on Render for hosting, ensuring accessibility and performance."
            projectUrlLabelSecond="Check GitHub"
            projectUrlStringSecond=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
