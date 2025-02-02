interface SectionHeaderProps {
  header: string;
}

import "../sections/Section.css";

const SectionHeader: React.FC<SectionHeaderProps> = ({ header }) => {
  return (
    <>
      <div className="section-header-wrapper">
        <h2 className="section-header-h2">{header}</h2>
        <div className="section-header-divider"></div>
      </div>
    </>
  );
};

export default SectionHeader;
