import React from "react";
import { ThemeProvider } from "styled-components";
import { StyledMain } from "./App.styles";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import { theme } from "./assets/styles/theme";
import MainPage from "./components/organisms/MainPage/MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledMain>
        <MainPage />
      </StyledMain>
    </ThemeProvider>
  );
}

export default App;
