import { Wrapper, Description } from './Card.styles';
import { StyledLink } from './Card.styles';
import { numberSeperator } from "../../helper/numberSeperator.js";

export const Card = ({ country }) => {
  const {
    name: { common },
    capital,
    continents: [continet],
    population,
    flags: { svg },
  } = country;

  return (
    <Wrapper>
      <StyledLink to={`country/${common}`}>
        <img src={svg} alt={common} />
        <Description>
          <h3>{common}</h3>
          <p>
            <span>Population:</span> {numberSeperator(population)}
          </p>
          <p>
            <span>Region:</span> {continet}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </Description>
      </StyledLink>
    </Wrapper>
  );
};