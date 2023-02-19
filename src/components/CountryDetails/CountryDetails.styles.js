import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 50px;
  color: ${({ theme }) => theme.colors.white};
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    align-self: center;
    justify-self: right;
    max-width: 600px;
  }

  @media (width > 1150px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Info = styled.div`
  max-width: 45%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto auto auto;
  gap: 30px 30px;
  
  @media (width < 1150px) {
    max-width: 60%;
  }

  @media (width < 1050px) {
    max-width: 65%;
  }

  @media (width < 950px) {
    max-width: 70%;
  }

  @media (width < 880px) {
    max-width: 75%;
  }

  @media (width < 775px) {
    max-width: 90%;
  }

  @media (width < 700px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
  h2 {
    grid-column: 1 / 3;
    margin: 0;
    align-self: flex-end;
    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
  }
  div:nth-of-type(1),
  div:nth-of-type(2) {
    align-self: baseline;
    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
  }

  div:nth-of-type(1) {
  }

  div:nth-of-type(1) {
  }
`;

export const StyledBorderCountries = styled.div`
  grid-column: 1 / 3;
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  align-items: flex-start;
  gap: 10px;
  
  div {
    font-weight: 600
  }

  @media (width < 1150px) {
    flex-wrap: wrap;
  }
`;

export const BorderCountryList = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.6rem 2rem 0.6rem 1.6rem ;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.5px;
  text-decoration: none;
  margin-bottom: 50px;
  margin-left: 20px;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const Span = styled.span`
  margin-left: 1rem;
`;
