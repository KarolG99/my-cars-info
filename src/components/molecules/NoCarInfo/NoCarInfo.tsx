import React from "react";

import NoResults from "../../../assets/icons/no-results.png";
import { StyledParagraph } from "../../atoms/StyledParagraph";
import { Wrapper } from "../../organisms/MainPage/MainPage.styles";
import { NoResultsImg } from "./NoCarInfo.styles";

const NoCarInfo = () => {
  return (
    <Wrapper>
      <StyledParagraph>
        Najpotrzebniejsze informacje o aucie pod ręką.
        <br />
        <br />
        Dodaj pierwszy pojazd.
      </StyledParagraph>

      <NoResultsImg src={NoResults} alt="" />
    </Wrapper>
  );
};

export default NoCarInfo;
