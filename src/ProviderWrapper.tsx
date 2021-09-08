import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import theme from "./theme";

const ProviderWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default ProviderWrapper;
