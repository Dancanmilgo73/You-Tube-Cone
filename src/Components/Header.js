import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import { Link } from "react-router-dom";

/* login action */
import { login } from ".././redux/actions/auth.action";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");

  const dispatch = useDispatch();
  const { accessToken, user, loading } = useSelector((state) => state.auth);

  /* sign in with google auth */
  const handleLogin = () => {
    dispatch(login());
    console.log("dispatched");
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsActiveSharpIcon className="header__icon" />
        {/* <AccountCircleSharpIcon className="header__icon" /> */}
        {user ? (
          <Avatar className="header__icon__avatar" src={user.photoURL} alt="" />
        ) : (
          <span onClick={handleLogin}>
            <AccountCircleOutlinedIcon className="header__icon" />
            <p>SIGN IN</p>
          </span>
        )}
      </div>
    </div>
  );
}
