import React from "react";
import { CarsProps } from "../../../types";
import { StyledSingleCar } from "./SingleCar.styles";

const SingleCar = ({
  brand,
  model,
  year,
  oilDate,
  oilKm,
  inspection,
}: CarsProps) => {
  return (
    <StyledSingleCar>
      <p>
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
    </StyledSingleCar>
  );
};

export default SingleCar;
