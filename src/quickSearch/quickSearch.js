import { InputAdornment, FilledInput, FormControl } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import SearchIcon from "@material-ui/icons/Search";
import DisplayImages from "./images/display-images";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    margin: '3% auto'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "70ch",
    padding: "12px 12px 12px",
    "&>div:first-child>div:last-child": {
      display: 'flex',
      marginTop: '0',
      alignSelf: 'initial'
    }
  }
}));

const QuickSearch = (props) => {
  const [search, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const classes = useStyles();

  const searchTextData = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ SearchKey: search })
    };
    await fetch("http://localhost:5000/ScraperService/similarity", requestOptions)
    .then(response => response.json())
    .then(data => {setData(data)});
  };

  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
      >
        <FilledInput
          id="filled-adornment-weight"
          placeholder="Search Text"
          value={search}
          onChange={(e) => setSearchText(e.target.value)}
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon onClick={searchTextData} />
            </InputAdornment>
          }
          aria-describedby="filled-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
      <DisplayImages data={data} />
    </div>
  );
};

export default QuickSearch;
