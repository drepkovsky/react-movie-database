import {
  alpha,
  AppBar,
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const links: { link: string; text: string }[] = [
  { link: "/", text: "Home" },
  { link: "/favorite", text: "Favorite" },
];

const Navbar = () => {
  // routing
  const { url } = useRouteMatch();

  // styles
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container maxWidth="md">
        <Box className={classes.toolbar}>
          <Box className={classes.brand}>
            <Typography variant="h6" color="textPrimary">
              Movie Database
            </Typography>
          </Box>
          <Box className={classes.links}>
            {links.map((linkItem, index) => {
              return (
                <NavLink
                  key={index}
                  link={linkItem.link}
                  isSelected={url === linkItem.link}
                >
                  {linkItem.text}
                </NavLink>
              );
            })}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

interface NavLinkProps {
  link: string;
  isSelected?: boolean;
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  link,
  isSelected,
  children,
}) => {
  const history = useHistory();

  const onClick = () => {
    history.replace(link);
  };

  return (
    <Button color={isSelected ? "primary" : "default"} onClick={onClick}>
      {children}
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  links: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  appBar: {
    background: alpha(theme.palette.background.default, 0.2),
    backdropFilter: "blur(8px)",
    boxShadow: "none",
  },
}));

export default Navbar;
