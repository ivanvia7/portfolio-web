interface BlockHeaderProps {
  header: string;
}

import "./BlockHeader.css";

const BlockHeader: React.FC<BlockHeaderProps> = ({ header }) => {
  return (
    <>
      <h3 className="h3-block-header">{header}</h3>
    </>
  );
};

export default BlockHeader;
