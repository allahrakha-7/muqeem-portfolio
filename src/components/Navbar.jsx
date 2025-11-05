import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const navItems = [
    { name: "About", to: "skills" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#00171f] backdrop-blur-lg shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 h-20">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            <span className="text-[#00a8e8]">Allah</span>
            <span className="text-[#00a8e8]">Rakha</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={item.to}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-[#00a8e8] transition-colors duration-300 cursor-pointer font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a8e8] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="contact" smooth={true} offset={-80} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] hover:from-[#007ea7] hover:to-[#003459] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Let&apos;s Talk
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleNav}
          className="md:hidden z-50 text-gray-200 p-2"
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900/98 backdrop-blur-lg z-40 md:hidden"
        >
          <div className="flex flex-col justify-center items-center h-full">
            <ul className="space-y-8 text-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={nav ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    onClick={closeNav}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-3xl font-semibold text-gray-200 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={nav ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <button className="px-8 py-3 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] hover:from-[#007ea7] hover:to-[#003459] text-white rounded-full font-medium text-lg">
                  Let&apos;s Talk
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
