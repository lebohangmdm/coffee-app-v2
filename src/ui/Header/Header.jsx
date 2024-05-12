import Logo from "../Logo";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import AuthMenu from "./AuthMenu";
import CartIcon from "./CartIcon";

const Header = ({ user, auth }) => {
  console.log(auth);
  return (
    <header className="p-6 relative bg-whitesmoke">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-10">
            <Logo />
            <NavLinks auth={auth} />
          </div>
          <div className=" hidden md:flex items-center gap-3 ">
            <SearchBar />
            <AuthMenu user={user} auth={auth} />
            <CartIcon />
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
