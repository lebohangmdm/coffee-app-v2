import { Button } from "@mui/material";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="p-6 relative bg-whitesmoke">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-10">
            <Logo />
            <NavLinks />
          </div>
          <div className=" hidden md:flex items-center gap-3 ">
            <SearchBar />
            <Button
              variant="outlined"
              className="rounded-full  px-4 border-brownish-1 border-1 border-opacity-70  text-brownish-1 bg-transparent hover:border-opacity-100 hover:text-brownish-2;"
            >
              Sign in
            </Button>
            <Button variant="contained" className="rounded-full bg-black px-4">
              Join us
            </Button>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
