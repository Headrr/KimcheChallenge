import React from "react";
import { Typography } from "@material-ui/core";
import "./Footer.css";

const Footer = () => {
  const fecha = new Date().getFullYear();

  return (
    <div className="footer">
      <Typography variant="h10" style={{ color: "white", textAlign: "center" }}>
        <p> KimcheChallenge {fecha} - &copy; Raúl Ignacio Ruz Valenzuela </p>
      </Typography>
    </div>
  );
};

export default Footer;
