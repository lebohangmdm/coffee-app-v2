import { NavLink } from "react-router-dom";

const links = ["menu", "about", "contact"];

const NavLinks = ({ auth }) => {
  return (
    <nav className="">
      <ul className="hidden md:flex items-center gap-8 lg:gap-12 list-none">
        {links.map((link) => {
          return (
            <li key={link}>
              <NavLink to={`${link}`} className={"nav-link"}>
                {link}
              </NavLink>
            </li>
          );
        })}
        {auth && (
          <li key={"orders"}>
            <NavLink to={`/orders`} className={"nav-link"}>
              Orders
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavLinks;
