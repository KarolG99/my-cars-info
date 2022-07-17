import styled from "styled-components";

export const StyledErrorMessage = styled.p`
  background-color: ${({ theme }) => theme.colors.mediumRed};
  padding: 5px 7px;
  border-radius: 7px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.red};
`;
