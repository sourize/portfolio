import { Icons } from "@/components/icons";

export const DATA = {
  name: "Sourish Chatterjee",
  initials: "SC",
  url: "https://sourish.vercel.app",
  resume: "/Sourish_Chatterjee_Resume.pdf",
  prevImage: "https://i.imgur.com/zTtzvAu.png",
  myImage: "/me.png",
  location: "WB, India",
  locationLink: "",
  timeZone: "Asia/Kolkata",
  localCode: "en-IN",
  description:
    "An Aspiring ML Engineer",
  about:
   "I'm an undergrad at MSIT with a passion for Artificial Intelligence and Machine Learning. My fascination with technology started early, inspired by the magic of movies like Iron Man, and now I'm on a mission to turn that inspiration into innovation. Curently I am focused learning my college courses and working on some projects on my free time as I learn more about the field simultaneously. Click here to know more.",
  bio: "",
  career:
    "",
  careerFull:
    " ",
  avatarUrl: "",
  connect:
    "I’m always excited to collaborate on projects or just chat about tech. Reach out anytime: **email: (connect.sourishchatterjee@gmail.com)** or dm me on [Twitter](https://x.com/sourize_) or [LinkedIn](https://linkedin.com/in/sourish-chatterjee).",
  skills: [
    "Python",
    "Pandas",
    "Numpy",
    "Scikit-Learn",
    "Tensorflow",
    "Keras",
    "Pytorch",
    "OpenCV",
    "Matplotlib",
    
  ],
  contact: {
    email: "connect.sourishchatterjee@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sourize",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sourish-chatterjee/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sourize_",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/sourize_/",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@sourize_",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:connect.sourishchatterjee@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Meghnad Saha Institute of Technology",
      location: "Kolkata, India",
      href: "https://msit.edu.in",
      degree: "B.Tech in CSE with Specialization in AIML",
      logoUrl: "/msit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "DPS Ruby Park",
      location: "Kolkata, India",
      href: "https://dpsrbpk.com",
      degree: "11th and 12th Grade with Computer Science",
      logoUrl: "/dps.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Ram Mohan Mission High School",
      location: "Kolkata, India",
      href: "",
      degree: "10th Schooling",
      logoUrl: "/rmmhs.png",
      start: "2007",
      end: "2020",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2024",
      dates: "August 2024 - Present",
      location: "",
      description:
        "Developed an Oil Spill Detection System using AIS dataset and Satellite Imagery.",
      image:
        "/SIH2024-logo.webp",
      mlh: "",
      links: [],
    },
  ],
} as const;
