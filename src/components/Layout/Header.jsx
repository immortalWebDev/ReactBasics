import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart: 0</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals image"></img>
      </div>
    </>
  );
};

export default Header;
