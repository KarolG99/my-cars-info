import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: 1px;
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.blue};
`;
