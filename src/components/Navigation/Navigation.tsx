import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Garage } from "../../assets/icons/garage.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { StyledNavigation } from "./Navigation.styles";


const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/">
        <Garage />
      </Link>
      <Link to="/add-car">
        <Car />
      </Link>
    </StyledNavigation>
  );
};

export default Navigation;
