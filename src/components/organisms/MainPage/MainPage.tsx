import React, { useState } from "react";
import { CarsProps, InitialFormValuesProps } from "../../../types";
import { StyledButton } from "../../atoms/StyledButton";
import { StyledH1 } from "../../atoms/StyledH1";
import FormField from "../../molecules/FormField/FormField";
import NoCarInfo from "../../molecules/NoCarInfo/NoCarInfo";
import { ButtonsWrapper, CarIcon, Wrapper } from "./MainPage.styles";

const initialFormValues: InitialFormValuesProps = {
  brand: "",
  model: "",
  year: "",
};

const MainPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [cars, setCars] = useState<CarsProps[]>([]);

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
      brand: formValues.brand,
      model: formValues.model,
      year: formValues.year,
    };
    setCars([...cars, newCar]);
    handleCancelForm();
  };

  return (
    <Wrapper>
      <StyledH1>Moje auta</StyledH1>

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

          <ButtonsWrapper>
            <StyledButton className="cancel" onClick={handleCancelForm}>
              Anuluj <span>＋</span>
            </StyledButton>
            <StyledButton onClick={handleSubmitForm}>Dodaj ＋</StyledButton>
          </ButtonsWrapper>
        </>
      )}

      {!cars.length ? (
        <NoCarInfo />
      ) : (
        cars.map((car, index) => <div key={index}>{car.brand}</div>)
      )}
    </Wrapper>
  );
};

export default MainPage;
