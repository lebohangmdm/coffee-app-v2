import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

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
        <ul className=" absolute top-16 right-4 flex flex-col space-y-6 px-8 py-6 shadow-xl list-none w-1/2  bg-brownish-4">
          <li>
            <a href="" className="nav-link">
              Menu
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
