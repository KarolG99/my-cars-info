import styled from "styled-components";

import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";

export const StyledSingleCar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
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
  position: relative;

  p {
    &.brand {
      margin-right: 75px;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export const StyledDeleteEdit = styled.div`
  background-color: ${({ theme }) => theme.colors.lightRed};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  &.edit {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    right: 50px;
  }
`;

export const StyledModal = styled.div`
  width: 80vw;
  height: fit-content;
  max-width: 300px;
  position: fixed;
  z-index: 10;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 3px 2px 6px 1px rgba(181, 206, 255, 1);
  -moz-box-shadow: 3px 2px 6px 1px rgba(181, 206, 255, 1);
  box-shadow: 3px 2px 6px 1px rgba(181, 206, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkText};
  }
`;

export const DeleteIcon = styled(Plus)`
  fill: ${({ theme }) => theme.colors.red};
  transform: rotate(45deg);
  width: 100%;
  height: 100%;
`;

export const EditIcon = styled(Edit)`
  width: 80%;
  height: 80%;
  fill: ${({ theme }) => theme.colors.orange};
`;
