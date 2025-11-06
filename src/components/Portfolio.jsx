import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion"; 
import ProjectModal from "./ProjectModal"; 

const projects = [
  {
    img: "/yapzap1.jpg",
    sliderImages: ["/yapzap1.jpg", "/yapzap2.jpg", "/yapzap3.jpg", "/yapzap4.jpg"],
    title: "YapZap - AI Learning App",
    description:
      "A cutting-edge, AI-powered learning app for kids. Features secure authentication, a modern frontend, and a robust backend. The core feature is an interactive, voice-based AI tutor (powered by Vapi-ai) that provides a personalized and engaging learning experience.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vapi-ai", "Clerk"],
    links: {
      site: "https://personal-learning-saas-app.vercel.app/",
      github: "https://github.com/allahrakha-7/saas-personal-learning-app",
    },
    featured: true,
  },
  {
    img: "/aamanu1.jpg",
    sliderImages: ["/aamanu1.jpg", "/aamanu2.jpg", "/aamanu3.jpg", "/aamanu4.jpg", "/aamanu5.jpg"],
    title: "Aamanu - Islamic Media App",
    description:
      "A comprehensive Islamic media application built with React Native. It provides users with a rich collection of religious content, including streaming of Islamic lectures, a digital Quran, prayer times, and community features in a clean, respectful interface.",
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase"],
    links: {
      site: "#",
      github: "#",
    },
    featured: true,
  },
  {
    img: "/readingcompass.jpg",
    sliderImages: ["/readingcompass.jpg", "/readingcompass_.jpg", "/readingcompass1.jpg", "/readingcompass2.jpg", "/readingcompass3.jpg"],
    title: "Bleks Reading Compass",
    description:
      "An Ed-tech assessment platform for children's literacy, available on both web and mobile. This project analyzes how a child reads letters and words, providing valuable feedback for parents and educators to track and improve reading skills.",
    technologies: ["React", "React Native", "Node.js", "MongoDB", "TailwindCSS"],
    links: {
      site: "#",
      github: "#",
    },
    featured: true,
  },
  {
    img: "/timio1.jpg",
    sliderImages: ["/timio1.jpg", "/timio2.jpg", "/timio3.jpg", "/timio4.jpg"],
    title: "Timio - Salon Booking App",
    description:
      "A complete booking and management solution for salons, available on web and mobile (React Native). This platform allows users to find salons, book appointments, and manage their schedules. Salon owners get a dedicated dashboard to maintain records and manage staff.",
    technologies: ["React Native", "React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    links: {
      site: "#",
      github: "#",
    },
    featured: true,
  },
  {
    img: "/clarifi1.jpg",
    sliderImages: ["/clarifi1.jpg", "/clarifi2.jpg", "/clarifi3.jpg", "/clarifi4.jpg", "/clarifi5.jpg"],
    title: "Clarifi - AI Insurance App",
    description:
      "An AI-powered React Native mobile application designed to simplify the complex world of medical insurance. Clarifi helps users understand their policies, manage claims, and get clear, AI-driven answers to complex insurance questions, making healthcare more accessible.",
    technologies: ["React Native", "Python", "FastAPI", "MongoDB", "AWS"],
    links: {
      site: "#",
      github: "#",
    },
    featured: true,
  },
  {
    img: "/reflekin1.jpg",
    sliderImages: ["/reflekin1.jpg", "/reflekin2.jpg", "/reflekin3.jpg", "/reflekin4.jpg"],
    title: "Reflekin - AI Memorial App",
    description:
      "A unique React Native app that creates a living memorial for loved ones. By training an AI model on provided life memories, photos, and stories, Reflekin allows users to interact with a digital personality that talks and shares memories, preserving their legacy.",
    technologies: ["React Native", "AI/LLM", "Node.js", "Python", "MongoDB"],
    links: {
      site: "#",
      github: "#",
    },
    featured: true,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="portfolio" className="py-20 bg-[#00171f]">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Title Section (Unchanged) --- */}
          <div className="flex justify-center">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-3 mb-4"
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
                <span className="text-[#cccccc] font-medium tracking-wider uppercase text-sm">
                  My Work
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#007ea7] to-[#00a8e8]"></div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-[#ffffff] mb-6"
              >
                Featured{" "}
                <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
                  Projects
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed"
              >
                A showcase of my recent work, featuring full-stack applications,
                mobile apps, and web platforms built with modern technologies.
              </motion.p>
            </div>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image: Add onClick and cursor-pointer */}
                <div 
                  className="flex-1 relative group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#003459] shadow-2xl border-2 border-[#003459] hover:border-[#00a8e8]/50 transition-all duration-300">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-[70vh] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00171f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] text-sm font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-3xl font-bold text-[#ffffff] mb-4"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-[#cccccc] text-lg leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-[#003459] text-[#00a8e8] rounded-lg text-sm font-medium border border-[#003459]"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00a8e8]/25 transition-all duration-300"
                    >
                      <BiLinkExternal size={20} />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-[#003459] text-[#cccccc] font-semibold rounded-lg border border-[#003459] hover:border-[#00a8e8]/50 hover:text-[#ffffff] transition-all duration-300"
                    >
                      <AiOutlineGithub size={20} />
                      Source Code
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects CTA */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-16"
            >
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#003459] text-[#cccccc] font-semibold rounded-lg border border-[#003459] hover:border-[#00a8e8]/50 hover:text-[#ffffff] transition-all duration-300"
              >
                <AiOutlineGithub size={24} />
                View More Projects on GitHub
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal is rendered here */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;