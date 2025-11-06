import { motion } from "framer-motion";
import { BiCalendar, BiBriefcase } from "react-icons/bi";

const experiences = [
  {
    company: "CloudEva Tech",
    role: "Software Development Engineer",
    period: "July 2025 - Current",
    type: "Onsite",
    description:
      "Engineered and maintained scalable, full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. Contributed to the complete software development lifecycle, from system design and architecture to deployment. Collaborated with cross-functional teams to optimize application performance and build seamless, responsive user interfaces.",
    technologies: ["React Native", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    current: true,
  },
  {
    company: "PITB Incubation Wing",
    role: "MERN Stack Developer",
    period: "Jan 2025 - Jun 2025",
    type: "Onsite",
    description:
      "Developed and deployed robust MERN stack (MongoDB, Express.js, React, Node.js) applications for various startups within the incubation wing. Focused on rapid prototyping, building RESTful APIs, and creating interactive, data-driven user interfaces. Worked closely with founders to translate business requirements into technical solutions.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    current: false,
  },
  {
    company: "ZUNF Medicare",
    role: "MERN Stack Developer",
    period: "Jun 2024 - Dec 2025",
    type: "Onsite - Part Time",
    description:
      "Designed and implemented full-stack solutions for a healthcare application using the MERN stack. Developed secure RESTful APIs with Node.js/Express.js for patient data management and built responsive frontend components in React. Focused on ensuring data integrity and a stable, HIPAA-compliant user experience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    current: false,
  },
  {
    company: "RUWWAAD Technologies",
    role: "MERN Stack - React Native Developer",
    period: "Sep 2024 - current",
    type: "Remote",
    description:
      "Serving in a hybrid role, developing both web and mobile applications. Built and maintained full-stack web platforms using the MERN stack (MongoDB, Express.js, React, Node.js). Simultaneously, developed cross-platform mobile applications using React Native, connecting them to the same backend APIs for a unified user experience.",
    technologies: ["React", "React Native", "Node.js", "Express.js", "MongoDB"],
    current: true,
  },
];

const Experience = () => {
  return (
    // 1. Section background set to 'rich_black'
    <section id="experience" className="py-12 lg:py-20 bg-[#00171f]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* --- Title Section (Re-skinned) --- */}
        <div className="flex justify-center">
          <div className="text-center mb-12 lg:mb-16">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 lg:gap-3 mb-4"
            >
              {/* 2. Gradient line from 'picton_blue' to 'cerulean' */}
              <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
              {/* 3. Text changed to 'white-400' */}
              <span className="text-[#cccccc] font-medium tracking-wider uppercase text-xs lg:text-sm whitespace-nowrap">
                Career Journey
              </span>
              <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#007ea7] to-[#00a8e8]"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 lg:mb-6"
            >
              Work{" "}
              {/* 4. Gradient text from 'picton_blue' to 'cerulean' */}
              <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              // 5. Text changed to 'white-400'
              className="text-lg lg:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed px-4"
            >
              A timeline of my professional journey, showcasing growth from
              internship to senior development roles.
            </motion.p>
          </div>
        </div>

        <div className="relative right-3">
          {/* Timeline Line */}
          {/* 6. Timeline line gradient from 'picton_blue' to 'cerulean' */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00a8e8] via-[#007ea7] to-[#00a8e8]"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              // Removed <Reveal> wrapper and applied motion directly
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                {/* 7. Timeline dot gradient, border changed to 'rich_black' */}
                <div className="absolute left-2.5 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] rounded-full border-4 border-[#00171f] z-10">
                  {experience.current && (
                    <div className="absolute inset-0  bg-gradient-to-r from-[#00a8e8] to-[#007ea7] rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    // 8. Card background changed to 'prussian_blue', border also 'prussian_blue'
                    // 9. Hover border changed to 'picton_blue'/50
                    className="bg-[#003459] rounded-2xl p-6 lg:p-8 border border-[#003459] hover:border-[#00a8e8]/50 transition-all duration-300 shadow-xl"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-[#ffffff] mb-1">
                          {experience.role}
                        </h3>
                        {/* 10. Company name text changed to 'picton_blue' */}
                        <h4 className="text-lg lg:text-xl text-[#00a8e8] font-semibold mb-2">
                          {experience.company}
                        </h4>
                      </div>
                      {experience.current && (
                        // 11. "Current" badge gradient adjusted (green for active status)
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Period and Type */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-[#999999]">
                        <BiCalendar size={16} />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#999999]">
                        <BiBriefcase size={16} />
                        <span className="text-sm">{experience.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#cccccc] leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          // 12. Tech tags re-skinned
                          className="px-3 py-1 bg-[#00171f] text-[#00a8e8] rounded-full text-sm font-medium border border-[#003459]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;