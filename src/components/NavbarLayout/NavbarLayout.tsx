import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

const NavbarLayout: React.FunctionComponent = ({ children }) => {
  // styles
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <main className={classes.content}>{children}</main>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.mixins.toolbar.minHeight,
    paddingBlock: theme.spacing(2, 4),
  },
}));

export default NavbarLayout;
