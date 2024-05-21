import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services/apiAuth";

const MobileNav = ({ isAuth, setIsAuth }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLinks, setShowMenuLinks] = useState(false);
  const navigate = useNavigate();

  const style = ({ isActive }) => {
    return isActive
      ? "visited:text-brownish-1 active:text-brownish-1  mobile-nav-link "
      : "mobile-nav-link";
  };

  const logoutHandler = async () => {
    setIsAuth(null);
    await logout();
    navigate("/");
  };

  return (
    <div className="md:hidden mr-3">
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
        <div className=" absolute top-17 right-4 flex flex-col space-y-6 px-8 py-6 shadow-xl list-none w-1/2  bg-light-brown-1">
          <div>
            <div className="flex justify-between mb-4">
              <p
                onClick={() => setShowMenuLinks(true)}
                className="text cursor-pointer"
              >
                Menu
              </p>
              <p
                onClick={() => setShowMenuLinks(false)}
                className="cursor-pointer"
              >
                Account
              </p>
            </div>
            {showMenuLinks ? (
              <ul className="space-y-2 divide-y divide-amber-950">
                <li>
                  <NavLink to="/menu?category=frappuccino" className={style}>
                    Frappuccino
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu?category=hot-coffee" className={style}>
                    Hot Coffee
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu?category=cold-coffee" className={style}>
                    Cold Coffee
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/menu?category=hot-tea" className={style}>
                    Hot tea
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu?category=cold-tea" className={style}>
                    Cold tea
                  </NavLink>
                </li>
              </ul>
            ) : isAuth ? (
              <ul className="space-y-2 divide-y divide-amber-950">
                <li>
                  <NavLink to="/profile" className={style}>
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orders" className={style}>
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={style}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={logoutHandler} className={style}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 divide-y divide-amber-950">
                <li>
                  <NavLink to="/login" className={style}>
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={style}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={style}>
                    About Us
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
