import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 90%;
  max-width: 325px;
  margin: 15px 0 3px 0;
`;

export const StyledInput = styled.input`
  width: 95%;
  max-width: 340px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.inputBg};
  font-size: 1rem;
  font-weight: 600;
  margin: 3px 0;
  color: ${({ theme }) => theme.colors.blue};
  &::placeholder {
    font-weight: 400;
    font-style: italic;
  }
`;
