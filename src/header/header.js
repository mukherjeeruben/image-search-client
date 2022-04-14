import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
 return (<ul className={classes.ul}>
    <li>
    <span >Image Search</span> 
  </li>
 </ul>);
};

export default Header;
