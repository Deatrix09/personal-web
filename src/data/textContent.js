export const heroContent = {
  greeting: "Hi, I'm",
  name: "Lukáš Kleveta",
  title: "Full Stack Developer",
  description: "I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
};

export const aboutContent = {
  title: "About Me",
  description: "I'm a passionate Full Stack Developer with a keen interest in creating efficient and scalable web applications. My journey in web development has equipped me with a diverse skill set and a problem-solving mindset.",
  // Add more about section content as needed
};

export const projectsContent = {
  title: "Projects",
  description: "Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.",
};

export const skillsContent = {
  title: "Skills",
  description: "A collection of technologies and tools I work with.",
};

export const timelineContent = {
  title: "My Journey",
  description: "Here's a look at my professional journey and key milestones.",
};

export const contactContent = {
  title: "Get in Touch",
  description: "Feel free to reach out to me through any of these platforms. I'm always open to new opportunities and connections!",
  formLabels: {
    name: "Name",
    email: "Email",
    message: "Message",
  },
  buttonText: "Send Message",
  contactInfo: [
    {
      title: "Email",
      value: "klevetalukas.work@gmail.com",
      link: "mailto:klevetalukas.work@gmail.com"
    },
    {
      title: "GitHub",
      value: "Deatrix09",
      link: "https://github.com/Deatrix09"
    },
    {
      title: "Location",
      value: "Brno, Czech Republic",
      link: "#"
    }
  ]
};

export const footerContent = {
  copyright: name => `${new Date().getFullYear()} ${name}. All rights reserved.`
};
