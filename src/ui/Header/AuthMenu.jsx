import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Avatar, ListSubheader } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services/apiAuth";

export default function AuthMenu({ user, auth }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  console.log(user);
  [];
  const avatarLetter = user?.fullName
    .split(" ")
    .at(0)
    .substring(0, 1)
    .toUpperCase();

  const handleLogout = async () => {
    await logout();
    return navigate("/");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#180b03" }}
      >
        {auth ? (
          <Avatar sx={{ backgroundColor: "#463c35" }}>{avatarLetter}</Avatar>
        ) : (
          <AccountCircleIcon />
        )}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ position: "absolute", top: "15px", left: "-120px" }}
      >
        <ListSubheader
          sx={{
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textDecorationThickness: "1px",
            color: "#180b03",
            fontSize: "18px",
            paddingInline: "24px",
          }}
        >
          My Account
        </ListSubheader>

        {auth ? (
          <div>
            <NavLink to={"/profile"}>
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#180b03",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  width: "150px",
                  paddingInline: "24px",
                }}
              >
                my profile
              </MenuItem>
            </NavLink>
            <NavLink to={"/logout"} onClick={handleLogout}>
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#180b03",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  width: "150px",
                  paddingInline: "24px",
                }}
              >
                logout
              </MenuItem>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"}>
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#180b03",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  width: "150px",
                  paddingInline: "24px",
                }}
              >
                Sign In
              </MenuItem>
            </NavLink>
            <NavLink to={"/register"}>
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#180b03",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  width: "150px",
                  paddingInline: "24px",
                }}
              >
                Register
              </MenuItem>
            </NavLink>
          </div>
        )}
      </Menu>
    </div>
  );
}
