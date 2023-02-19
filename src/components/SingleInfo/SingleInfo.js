import { StyledSingleInfo } from "./SingleInfo.style.js";

export const SingleInfo = ({ title, stat, isArray }) => (
  <StyledSingleInfo>
    <span>{title}: </span>
    {isArray ? stat.join(', ') : stat}
  </StyledSingleInfo>
);