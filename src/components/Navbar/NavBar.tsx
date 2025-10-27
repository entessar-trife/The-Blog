import NavbarLinks from "./NavbarLinks";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full bg-white dark:bg-dark py-6 lg:py-7 xl:py-[30px] px-5 xl:px-28 transition-all duration-300 ${
          scroll ? "shadow dark:shadow-[0_0_16px_-5px_gray]" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-xl leading-6 text-primary dark:text-white font-semibold">
           Entessar Trife
          </h1>

          <NavbarLinks
            className="hidden md:flex items-center justify-between gap-3.5"
            menuStyle="md:flex gap-2.5"
          />

          <FaBars
            className="block md:hidden h-8 w-8 text-primary dark:text-white cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-screen w-screen z-50
        bg-white dark:bg-dark
        flex flex-col items-center justify-center
        transition-all duration-700 ease-in-out
        transform ${
          showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <h1 className="text-lg md:text-xl leading-6 text-primary dark:text-white font-semibold mb-[54px]">
          <Link to="/The-Blog" onClick={() => setShowMenu(false)}>
            Entessar Trife
          </Link>
        </h1>

        <NavbarLinks
          onClick={() => setShowMenu(false)}
          className="flex flex-col items-center"
          menuStyle="flex flex-col items-center gap-5 mb-5"
        />

        <FaXmark
          className="h-8 w-8 mt-[171px] text-primary dark:text-white cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      </div>
    </>
  );
};

export default NavBar;
