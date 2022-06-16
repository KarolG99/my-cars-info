import React from "react";
import { Route, Routes } from "react-router-dom";
import { StyledMain, Wrapper } from "./App.styles";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import AddCar from "./components/AddCar/AddCar";
import AllCars from "./components/AllCars/AllCars";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledMain>
        <Routes>
          <Route path="/" element={<AllCars />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </StyledMain>

      <Navigation />
    </Wrapper>
  );
}

export default App;
