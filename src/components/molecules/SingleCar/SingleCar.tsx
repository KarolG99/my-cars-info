import React, { useState } from "react";

import { CarsProps } from "../../../types";
import { StyledButton } from "../../atoms/StyledButton";
import { ButtonsWrapper } from "../../organisms/MainPage/MainPage.styles";
import {
  DeleteIcon,
  EditIcon,
  StyledDeleteEdit,
  StyledModal,
  StyledSingleCar,
} from "./SingleCar.styles";

const SingleCar = ({
  id,
  brand,
  model,
  year,
  oilDate,
  oilKm,
  inspection,
  insuranceEnd,
  handleDeleteCar,
  handleEditCar,
}: CarsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    if (handleDeleteCar) {
      handleDeleteCar();
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {isModalOpen && (
        <StyledModal>
          <p>Czy na pewno usunąć pojazd?</p>
          <ButtonsWrapper className="modal">
            <StyledButton onClick={handleDeleteClick}>Tak</StyledButton>
            <StyledButton
              className="cancel"
              onClick={() => setIsModalOpen(false)}
            >
              Nie
            </StyledButton>
          </ButtonsWrapper>
        </StyledModal>
      )}

      <StyledSingleCar>
        <StyledDeleteEdit onClick={() => setIsModalOpen((prev) => !prev)}>
          <DeleteIcon />
        </StyledDeleteEdit>

        <StyledDeleteEdit className="edit" onClick={handleEditCar}>
          <EditIcon />
        </StyledDeleteEdit>

        <p className="brand">
          Marka:
          <span> {brand}</span>
        </p>
        <p>
          Model:
          <span> {model}</span>
        </p>
        <p>
          Rok:
          <span> {year}</span>
        </p>
        {oilDate && (
          <p>
            Ostatnia wymiana oleju (data):
            <br />
            <span> {oilDate}</span>
          </p>
        )}
        {oilKm && (
          <p>
            Ostatnia wymiana oleju (km):
            <span> {oilKm}</span>
          </p>
        )}
        {inspection && (
          <p>
            Kolejny przegląd:
            <br />
            <span> {inspection}</span>
          </p>
        )}
        {insuranceEnd && (
          <>
            <p>Data wygaśnięcia ubezpieczenia:</p>
            <span>{insuranceEnd}</span>
          </>
        )}
      </StyledSingleCar>
    </>
  );
};

export default SingleCar;
