import styled from "styled-components";

export const StyledParagraph = styled.p`
  text-align: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 500;
`;
