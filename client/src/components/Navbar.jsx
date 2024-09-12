import React from "react";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>
      <div className="navbar_search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};
