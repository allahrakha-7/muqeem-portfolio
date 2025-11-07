import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";
import { Link } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    // 1. Set background to 'rich_black'
    <footer className="bg-[#00171f] border-t border-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            {/* 2. Increased col-span to match screenshot */}
            <div className="md:col-span-2"> 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-[#ffffff] mb-4">
                  {/* 3. Styled name with 'picton_blue' */}
                  <span className="text-[#00a8e8]">Muqeem</span>
                  <span className="text-[#00a8e8]"> Malik</span>
                </h3>
                <p className="text-[#cccccc] leading-relaxed mb-6 max-w-md">
                  Software Developement Engineer passionate about creating exceptional
                  digital experiences. Specializing in React, React Native, Node.js, and
                  modern web technologies.
                </p>
                {/* 4. Styled social icons */}
                <div className="flex gap-4">
                  {[
                    { icon: AiOutlineGithub, href: "https://github.com/ruwwaad/portfolio", label: "GitHub" },
                    { icon: AiOutlineLinkedin, href: "https://www.linkedin.com/in/muqeem-malik-166401295 ", label: "LinkedIn" },
                    { icon: AiOutlineInstagram, href: "https://www.instagram.com/mmuqeemmalik?igsh=NG1iMHZyMmZmeW1h", label: "Instagram" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      // 5. Applied 'prussian_blue' bg, 'white-300' text, and 'picton_blue' hover
                      className="w-10 h-10 bg-[#003459] hover:bg-[#007ea7] rounded-full flex items-center justify-center text-[#999999] hover:text-white transition-all duration-300 border border-[#003459] hover:border-[#00a8e8]/50"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-[#ffffff] font-semibold mb-4 text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: "About", to: "skills" }, // Assuming 'skills' is your About section's ID
                    { name: "Portfolio", to: "portfolio" },
                    { name: "Experience", to: "experience" },
                    { name: "Contact", to: "contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        // 6. Styled links
                        className="text-[#999999] hover:text-[#00a8e8] transition-colors duration-300 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-[#ffffff] font-semibold mb-4 text-lg">Services</h4>
                <ul className="space-y-3">
                  {[
                    "Mobile Apps",
                    "Web Development",
                    "UI/UX Design",
                    "Consulting",
                  ].map((service) => (
                    <li key={service}>
                      {/* 7. Styled static text */}
                      <span className="text-[#999999]">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#999999] text-sm flex items-center gap-2"
            >
              © {currentYear} Muqeem Malik. Made with
              <AiOutlineHeart className="text-red-500" size={16} />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#999999] text-sm flex items-center gap-2"
            >
              All rights reserved.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              // 8. Styled 'Back to Top' button
              className="flex items-center gap-2 px-4 py-2 bg-[#003459] hover:bg-[#007ea7] text-[#999999] hover:text-[#00a8e8] rounded-full transition-all duration-300 border border-[#003459] hover:border-[#00a8e8]/50"
              aria-label="Back to top"
            >
              <BiArrowToTop size={18} />
              <span className="text-sm text-[#ffffff]">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;