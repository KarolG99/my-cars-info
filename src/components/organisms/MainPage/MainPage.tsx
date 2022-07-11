import React from "react";
import { StyledH1 } from "../../atoms/StyledH1";
import NoCarInfo from "../../molecules/NoCarInfo/NoCarInfo";
import { Wrapper } from "./MainPage.styles";

const MainPage = () => {
  return (
    <Wrapper>
      <StyledH1>Moje auta</StyledH1>

      <NoCarInfo />
    </Wrapper>
  );
};

export default MainPage;
