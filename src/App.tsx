import React from "react";
import ProviderWrapper from "./ProviderWrapper";
import Router from "./Router/Router";

function App() {
  return (
    <ProviderWrapper>
      <Router />
    </ProviderWrapper>
  );
}

export default App;
