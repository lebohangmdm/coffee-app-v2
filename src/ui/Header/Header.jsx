import Logo from "../Logo";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import AuthMenu from "./AuthMenu";
import CartIcon from "./CartIcon";
import { useState } from "react";
import MobileCartIcon from "./MobileCartIcon";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../features/cart/cartSlice";

const Header = ({ user, auth }) => {
  const [isAuth, setIsAuth] = useState(auth);
  const quantity = useSelector(getTotalQuantity);
  console.log(isAuth);

  return (
    <header className="py-6 relative bg-[#DDDDDD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-10">
            <Logo />
            <NavLinks isAuth={isAuth} />
          </div>
          <div className=" hidden md:flex items-center gap-3 ">
            <SearchBar />
            <AuthMenu user={user} isAuth={isAuth} setIsAuth={setIsAuth} />
            <CartIcon />
          </div>
          <div className="flex items-center md:hidden">
            <MobileNav isAuth={isAuth} setIsAuth={setIsAuth} />

            {quantity >= 1 && <MobileCartIcon />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
