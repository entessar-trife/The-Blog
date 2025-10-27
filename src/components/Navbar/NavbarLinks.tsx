import { NavLinkData } from "../../data/NavLinkData";
import { NavLink } from "react-router-dom";
import ToggleModeComponent from "../ToggleModeComponent";
import type React from "react";

interface NavbarLinksProps {
  menuStyle: string;
  className?: string;
  onClick?: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({
  menuStyle,
  className,
  onClick,
}) => {
  return (
    <div className={`${className}`}>
      <ul className={menuStyle}>
        {NavLinkData.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              onClick={onClick}
              className={({ isActive }) => `
              text-lg md:text-xl font-normal leading-6 
              text-primary dark:text-white p-2 
               border-b transition-colors duration-300
                ${
                  isActive
                    ? "border-primary dark:border-white"
                    : "border-transparent hover:border-primary dark:hover:border-white"
                }`}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ToggleModeComponent />
    </div>
  );
};

export default NavbarLinks;
