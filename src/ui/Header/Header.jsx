import { Button } from "@mui/material";
import Logo from "../Logo";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-10">
            <Logo />
            <nav className="">
              <ul className="hidden md:flex items-center gap-8 lg:gap-12 list-none">
                <li>
                  {" "}
                  <a href="" className="nav-link">
                    menu
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="" className="nav-link">
                    About us
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" hidden md:flex items-center gap-3 ">
            <SearchBar />
            <Button
              variant="outlined"
              className="rounded-full px-4 border-brownish-1 border-1 border-opacity-70  text-brownish-1 bg-transparent hover:border-opacity-100"
            >
              Sign in
            </Button>
            <Button variant="contained" className="rounded-full bg-black px-4">
              Join us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
