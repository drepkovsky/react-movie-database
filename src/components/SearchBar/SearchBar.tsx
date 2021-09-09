import {
  Box,
  CircularProgress,
  IconButton,
  InputBase,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
  isLoading?: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  //styles
  const classes = useStyles();

  //  handlers
  const handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setSearch(e.target.value);
  };

  // search
  const onSubmit = () => {
    onSearch(search);
  };

  const onKeyDown: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <InputBase
      name="search"
      placeholder="Search"
      onChange={handleChange}
      value={search}
      className={classes.input}
      endAdornment={
        <IconButton color="primary" onClick={onSubmit} disabled={isLoading}>
          {isLoading ? <CircularProgress size="1.5rem" /> : <SearchIcon />}
        </IconButton>
      }
      fullWidth
      onKeyDown={onKeyDown}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: "30px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 3, 0),
    boxShadow: theme.shadows[5],
  },
}));

export default SearchBar;
