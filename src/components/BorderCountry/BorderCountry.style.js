import styled from 'styled-components';

export const StyledBorderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 3px 10px;
  border-radius: 3px;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;