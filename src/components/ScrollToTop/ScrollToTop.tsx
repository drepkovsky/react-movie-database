import { alpha, IconButton, makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  //styles
  const classes = useStyles();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onClick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  };

  return (
    <IconButton
      className={clsx(classes.wrapper, {
        [classes.hidden]: !isVisible,
        [classes.shown]: isVisible,
      })}
      disabled={!isVisible}
      color="secondary"
      onClick={onClick}
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(2),
    transition: "all 0.2s ease-in-out",
    zIndex: 100,
    background: theme.palette.background.paper,
    "&:hover": {
      background: alpha(theme.palette.secondary.main, 0.5),
    },
  },
  hidden: {
    opacity: 0,
    transform: "scale(0)",
  },
  shown: {
    opacity: 1,
    transform: "scale(1)",
  },
}));

export default ScrollToTop;
