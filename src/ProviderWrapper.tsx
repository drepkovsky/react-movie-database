import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const ProviderWrapper: React.FunctionComponent = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
