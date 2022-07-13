import styled from "styled-components";

export const StyledSingleCar = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  margin: 20px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
  -webkit-box-shadow: 2px 3px 5px 0px rgba(181, 206, 255, 1);
  -moz-box-shadow: 2px 3px 5px 0px rgba(181, 206, 255, 1);
  box-shadow: 2px 3px 5px 0px rgba(181, 206, 255, 1);
  font-size: 0.9rem;
  width: 100%;
  max-width: 370px;

  span {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
    font-size: 1.1rem;
  }
`;
