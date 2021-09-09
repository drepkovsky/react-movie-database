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
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import clsx from "clsx";

const links: { link: string; text: string }[] = [
  { link: "/", text: "Home" },
  { link: "/favorite", text: "Favorite" },
];

const Navbar = () => {
  const [extended, setExtended] = React.useState(false);

  // routing
  const { url } = useRouteMatch();

  // styles
  const classes = useStyles();

  // effect
  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setExtended(true);
      } else {
        setExtended(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AppBar className={clsx(classes.appBar, { [classes.extended]: extended })}>
      <Container maxWidth="md">
        <Box className={classes.toolbar}>
          <Box className={classes.brand}>
            <Link to="/" className={classes.link}>
              <Typography variant="h6" color="inherit">
                Movie Database
              </Typography>
            </Link>
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
    history.push(link);
  };

  return (
    <Box ml={1}>
      <Button color={isSelected ? "primary" : "default"} onClick={onClick}>
        {children}
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
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
    background: alpha(theme.palette.background.default, 0.7),
    backdropFilter: "blur(8px)",
    boxShadow: "none",
  },
  extended: {
    boxShadow: theme.shadows[20],
  },
}));

export default Navbar;
