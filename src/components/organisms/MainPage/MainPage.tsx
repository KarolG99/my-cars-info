import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import FormField from "../../molecules/FormField/FormField";
import NoCarInfo from "../../molecules/NoCarInfo/NoCarInfo";
import SingleCar from "../../molecules/SingleCar/SingleCar";
import { StyledButton } from "../../atoms/StyledButton";
import { StyledH1 } from "../../atoms/StyledH1";
import { CarsProps, InitialFormValuesProps } from "../../../types";
import { ButtonsWrapper, CarIcon, Wrapper } from "./MainPage.styles";

const initialFormValues: InitialFormValuesProps = {
  id: "",
  brand: "",
  model: "",
  year: "",
  oilDate: "",
  oilKm: "",
  inspection: "",
  insuranceEnd: "",
};

const MainPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [cars, setCars] = useState<CarsProps[]>([]);
  const storedCars = JSON.parse(localStorage.getItem("cars") || "[]");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    setFormValues(initialFormValues);
  };

  const handleSubmitForm = () => {
    const newCar = {
      id: uuid(),
      brand: formValues.brand,
      model: formValues.model,
      year: formValues.year,
      oilDate: formValues.oilDate,
      oilKm: formValues.oilKm,
      inspection: formValues.inspection,
      insuranceEnd: formValues.insuranceEnd,
    };
    setCars([...cars, newCar]);
    handleCancelForm();
    localStorage.setItem(
      "cars",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cars") || "[]"),
        newCar,
      ])
    );
  };

  const handleDeleteCar = (id: string) => {
    const currentCars = storedCars.filter(
      (car: { id: string }) => car.id !== id
    );
    localStorage.setItem("cars", JSON.stringify([...currentCars]));
    setCars(currentCars);
  };

  return (
    <Wrapper>
      <StyledH1>Moje pojazdy</StyledH1>

      {!isFormOpen ? (
        <StyledButton onClick={() => setIsFormOpen((prev) => !prev)}>
          Dodaj <CarIcon />
        </StyledButton>
      ) : (
        <>
          <FormField
            id="brand"
            name="brand"
            label="Marka samochodu"
            placeholder="BMW"
            value={formValues.brand}
            onChange={handleInputChange}
          />
          <FormField
            id="model"
            name="model"
            label="Model"
            placeholder="X7"
            value={formValues.model}
            onChange={handleInputChange}
          />
          <FormField
            id="year"
            name="year"
            label="Rok produkcji"
            placeholder="2022"
            value={formValues.year}
            onChange={handleInputChange}
          />
          <FormField
            type="date"
            id="oilDate"
            name="oilDate"
            label="Data ostatniej wymiany oleju"
            value={formValues.oilDate}
            onChange={handleInputChange}
          />
          <FormField
            id="oilKm"
            name="oilKm"
            label="Przejechanych km podczas ostatniej wymiany"
            placeholder="90 000"
            value={formValues.oilKm}
            onChange={handleInputChange}
          />
          <FormField
            type="date"
            id="inspection"
            name="inspection"
            label="Data następnego przeglądu"
            value={formValues.inspection}
            onChange={handleInputChange}
          />
          <FormField
            type="date"
            id="insuranceEnd"
            name="insuranceEnd"
            label="Data wygaśnięcia ubezpieczenia"
            value={formValues.insuranceEnd}
            onChange={handleInputChange}
          />

          <ButtonsWrapper>
            <StyledButton className="cancel" onClick={handleCancelForm}>
              Anuluj <span>＋</span>
            </StyledButton>
            <StyledButton onClick={handleSubmitForm}>Dodaj ＋</StyledButton>
          </ButtonsWrapper>
        </>
      )}

      {!storedCars.length ? (
        <NoCarInfo />
      ) : (
        storedCars.map((car: CarsProps, index: number) => (
          <SingleCar
            id={car.id}
            key={index}
            brand={car.brand}
            model={car.model}
            year={car.year}
            oilDate={car.oilDate}
            oilKm={car.oilKm}
            inspection={car.inspection}
            handleDeleteCar={() => handleDeleteCar(car.id)}
          />
        ))
      )}
    </Wrapper>
  );
};

export default MainPage;
