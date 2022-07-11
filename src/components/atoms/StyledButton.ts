import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 7px;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  font-weight: 600;
  border: none;
  cursor: pointer;
  svg {
    margin-left: 8px;
    fill: ${({ theme }) => theme.colors.blue};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;
