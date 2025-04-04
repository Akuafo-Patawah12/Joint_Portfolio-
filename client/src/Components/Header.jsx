
import { motion } from "framer-motion";
import { Moon, Sun , Menu , X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logoicon.svg"
import Logowhite from "../assets/Logowhite.svg"
import useDarkMode from "./Theme";

export default function Header({ dropdown}) {
  const { darkMode, setDarkMode } = useDarkMode();
    const [showDrop,setShowDrop] = dropdown

   

    return(
        <header className={`z-23 sticky border-b-2 border-stone-200 top-0 py-6 px-[2.5%] ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} border-b-3 border-gray-200`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold italic"
        >
          <a href="/" className="flex text-blue-500">Techscr {darkMode ? <img src={Logowhite} alt="logo"/>: <img src={Logo} alt="logo"/>}ww</a>
        </motion.h2>
        
        <nav className="hidden gap-6 lg:flex">
          
            <NavLink to="/about" className="hover:underline">About</NavLink>
            <NavLink to="/projects" className="hover:underline">Projects</NavLink>
            
          
        </nav>
         
        <section className="flex gap-2 items-center">
        <button  className="p-2 rounded-full bg-gray-200 ">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="lg:hidden" onClick={()=> setShowDrop(prev => !prev)}> {showDrop ?  <X/> : <Menu />}</button>
        </section>
      </div>
    </header>
    )
}