import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [search, setsearch] = useState("");

  const [dropdownMenu, setdropdownMenu] = useState("");

  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>
      <div className="navbar_search">
        <input type="text" placeholder="Search..." />
        <IconButton>
          <Search sx={{ color: variables.pinkred }} />
        </IconButton>
      </div>
      <div className="navbar_right">
        {user ? (
          <a href="/create-listing">Become A Host</a>
        ) : (
          <a href="/login">Become A Host</a>
        )}

        <button className="navbar_right_account">
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>
      </div>
    </div>
  );
};
