import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const style = ({ isActive }) => {
    return isActive
      ? "visited:text-brownish-1 active:text-brownish-1 nav-link"
      : "nav-link";
  };
  return (
    <div className="md:hidden">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setShowMenu((show) => !show)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {showMenu && (
        <ul className=" absolute top-16 right-4 flex flex-col space-y-6 px-8 py-6 shadow-xl list-none w-1/2  bg-light-brown-1">
          <li>
            <NavLink to="/menu" className={style}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={style}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={style}>
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
