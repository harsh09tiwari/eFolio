import { useState } from "react";
import { motion } from "motion/react"


/**
 * Returns a navigation menu with links to the following pages:
 * - Home
 * - About
 * - Work
 * - Contact
 * 
 * @returns {JSX.Element} The navigation menu
 */

function Navigation() {
    return(
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-li">
                <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-li">
                <a href="#projects" className="nav-link">Work</a>
            </li>
            <li className="nav-li">
                <a href="#contacts" className="nav-link">Contact</a>
            </li>
        </ul>
    )
}



/**
 * Returns the navigation bar which is responsive and has a toggle button on smaller screen sizes.
 * 
 * @returns {JSX.Element} The navigation bar
 */
function Navbar() {

    const [isOpen, setIsOpen] = useState(false)  // isOpen state to manage the menu toggle
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a
                href="/" 
                className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                >
                Harsh
                </a>
                <button 
                    onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle" />
                </button>
                <nav className="hidden sm:flex">

                    <Navigation />        

                </nav>
            </div>
        </div>
        {/* Mobile Menu */}
        {/* it is checked if isOpen is true then it will show the menu */}
        {isOpen && (
            <motion.div className="block overflow-hidden text-center sm:hidden"
            initial = {{opacity: 0, x: -10}}
            animate = {{opacity: 1, x: 0}}
            style= {{maxHeight: "100vh"}}
            transition={{ duration: 0.7 }}
            >
                <nav className="pb-5">
                    <Navigation />
                </nav>
            </motion.div>
        )}
    </div>
  )
}

export default Navbar;