import { Link} from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="mx-w-screen-[1440px] container mx-auto flex justify-between items-center  py-6">
        {/* nav logo */}
        <Link to="/" className="tracking-tight text-[28px] font-bold">
          Panto
        </Link>
        {/* Menu Navigation Icon For Mobile Device */}
        <div className="md:hidden text-xl cursor-pointer hover:text-primary" onClick={()=>setMenuOpen(prev => !prev)}>
        {menuOpen ? null: <FaBars/>}
        </div>
        {/* Nav Items For Desktop Device */}
        <div className="hidden md:block">
         <NavItem/>
        </div>
        {/* Nav Items For Mobile Device */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex flex-col justify-center items-center space-y-8 text-white transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
            <FaTimes onClick={()=>setMenuOpen(prev => !prev)} className="absolute top-4 right-4 text-xl cursor-pointer"/> 
            <NavItem setMenuOpen={setMenuOpen}/>
        </div>
        {/* Cart Icon */}
        <div className="hidden md:block cursor-pointer relative">
        <FaShoppingBag className="text-xl"/>
        <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs ">0</sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
