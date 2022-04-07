import { InputAdornment, FilledInput, FormControl } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import SearchIcon from "@material-ui/icons/Search";
import DisplayImages from "./images/display-images";
import { red } from "@material-ui/core/colors";
import { alpha } from "@material-ui/core/styles/colorManipulator";

const Pointer = {cursor: 'pointer'};
const TextBoxStyle = {height: '50px',
                      width: "600px",
                      display: 'flex',
                      alignSelf: 'initial'};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    margin: '10% auto',
    '& .MuiFilledInput-adornedEnd': {
      backgroundColor: "#fcfcfb",
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#fff",
        text: 'Search'
      },
      "&$focused": {
        backgroundColor: "#fff",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main
      }
    },
    '& .MuiFilledInput-input':{
      padding: '11px 12px 10px'
    },
    '& .MuiSvgIcon-root':{
      padding: '1px 2px 14px'
    }
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  // textField: {
  //   width: "70ch",
  //   padding: "12px 12px 12px",
  //   "&>div:first-child>div:last-child": {
  //     display: 'flex',
  //     marginTop: '0',
  //     alignSelf: 'initial'
  //   }
  // }
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
        className={clsx(classes.margin)}
        variant="filled"
      >
        <FilledInput
          id="filled-adornment-weight"
          style = {TextBoxStyle}
          // placeholder="Search Text"
          value={search}
          onChange={(e) => setSearchText(e.target.value)}
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon onClick={searchTextData} 
                          style={Pointer} />
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
