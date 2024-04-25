import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { ListSubheader } from "@mui/material";

export default function AuthMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <AccountCircleIcon />
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
      </Menu>
    </div>
  );
}
