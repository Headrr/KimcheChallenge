import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="sticky" style={{ background: "#ff530d"}}>
    <Toolbar 
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#33BEFF",
        }}>
      &nbsp;&nbsp;
      <h1>Country search</h1>
    </Toolbar>
  </AppBar>
  );
};

export default Header;
