import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

const NavbarLayout: React.FunctionComponent = ({ children }) => {
  // styles
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Navbar />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: `calc(${theme.mixins.toolbar.minHeight}px  + ${theme.spacing(
      2
    )}px)`,
    paddingBottom: theme.spacing(8),
  },
  app: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
}));

export default NavbarLayout;
