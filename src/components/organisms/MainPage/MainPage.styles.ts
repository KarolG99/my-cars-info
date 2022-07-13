import styled from "styled-components";
import { ReactComponent as Car } from "../../../assets/icons/car.svg";

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsWrapper = styled.div`
  width: 80%;
  max-width: 300px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const CarIcon = styled(Car)``;
