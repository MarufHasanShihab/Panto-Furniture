import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"


const NavItem = ({setMenuOpen}) => {
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/shop", label: "Shop" },
        { path: "/contact", label: "Contact" },
      ];
    return (
        <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
        {navItems.map((item, index) => (
          <li key={index} className="text-lg font-normal" onClick={()=>setMenuOpen(prev=>!prev)}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                 isActive ? "text-primary font-bold" : ""
              }>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
};

NavItem.propTypes = {
    setMenuOpen: PropTypes.func.isRequired
}

export default NavItem;