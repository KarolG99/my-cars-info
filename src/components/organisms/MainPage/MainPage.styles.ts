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

export const CarIcon = styled(Car)``;
