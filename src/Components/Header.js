import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchSharpIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsActiveSharpIcon className="header__icon" />
        <AccountCircleSharpIcon className="header__icon" />
      </div>
    </div>
  );
}
