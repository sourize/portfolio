import { Icons } from "@/components/icons";
import { HomeIcon, UserIcon, PencilLine, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const DATA = {
  name: "Sourish Chatterjee | An Aspiring ML Engineer",
  initials: "SC",
  url: "https://sourish.xyz",
  resume: "/Sourish_Chatterjee.pdf",
  prevImage: "/land.jpg" ,
  location: "WB, India",
  timeZone: "Asia/Kolkata",
  localCode: "en-IN",
  locationLink: "",
  description:
    "An Aspiring ML Engineer/Data Scientist, turning data into impactful insights!",
  summary:
    "I'm a Computer Science undergrad at MSIT, specializing in AI and ML. Driven by a passion for technology, I'm focused on using data to tackle real-world challenges and create positive, lasting change.",
  career:
    "My journey in AI and machine learning revolves around building smart solutions that have a real impact. I'm always seeking to innovate and explore new ways to shape the future through technology. Want to learn more? [Click here](/about).",
  avatarUrl: "/me1.png",
  navbar: [


    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserIcon, label: "About" },
    //{ href: "/blog", icon: PencilLine, label: "Blog" },
    { href: "/projects", icon: Code, label: "Projects" },
  ],

  contact: {
    email: "sourishchatterjee0@gmail.com",
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
      email: {
        name: "Send Email",
        url: "mailto:contact.sourishchatterjee@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Prodigy Infotech",
      href: "https://www.linkedin.com/company/prodigy-infotech/",
      badges: [],
      location: "Remote",
      title: "Machine Learning Intern",
      logoUrl: "/prodigy.jpeg",
      start: "Apr 2024",
      end: "May 2024",
      description:
        "- Spearheaded four diverse machine learning projects, focusing on:\n- Image classification\n- Predictive modeling\n- Engineered and optimized advanced ML algorithms, significantly enhancing model performance\n- Collaborated effectively with cross-functional teams to deliver high-quality solutions aligned with project objectives",
      certificate: "https://drive.google.com/file/d/1Bm0SkUWhtAguFByzbxeUJNCFfG8pfwhw/view?usp=sharing",
    },
    {
      company: "Academy of Skill Development",
      badges: [],
      href: "https://www.linkedin.com/company/asdindia/",
      location: "Meghnad Saha Institute of Technology",
      title: "Data Analyst",
      logoUrl: "/asd.jpeg",
      start: "Jan 2024",
      end: "Feb 2024",
      description:
        "- Conducted in-depth analysis and visualization of stock market trends using large, complex datasets\n- Generated actionable, data-driven insights to inform strategic decision-making processes\n- Collaborated within a multidisciplinary team to refine and enhance data analysis methodologies",
        link: "https://github.com/sourize/Data-Analysis-of-NIFTY-50-Dataset",
        certificate: "https://drive.google.com/file/d/1SuaJ0b2P5EgZkDH_D8b4AQpKMd0qZIxT/view?usp=drive_link",
    },
  ],
  education: [
    {
      school: "Meghnad Saha Institute of Technology",
      href: "https://msit.edu.in",
      degree: "B.Tech in CSE with Specialization in AI & ML",
      logoUrl: "/msit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "DPS Ruby Park",
      href: "https://www.dpskolkata.com/",
      degree: "Class 12th",
      logoUrl: "/dpsrpk.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Ram Mohan Mission High School",
      href: "",
      degree: "Class 10th",
      logoUrl: "/rmmhs.png",
      start: "2007",
      end: "2020",
    },
  ],
  projects: [
    /*
    {
      title: "AI-Powered Flappy Bird Game",
      href: "https://github.com/sourize/AI-Powered-Flappy-Bird-Game-Using-NEAT-Algorithm",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "An AI powered Flappy Bird Game Using NEAT (NeuroEvolution of Augmenting Topologies) Algorithm",
      technologies: [
        "Python",
        "NEAT",
        "Pygame",
      ],
      links: [
        {
          type: "Read More",
          href: "/blog/How-Great-Leaders-Inspire-Action",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sourize/AI-Powered-Flappy-Bird-Game-Using-NEAT-Algorithm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Flappy3D.webp",
      video:
        "",
    },
    {
      title: "Data Analysis of NIFTY 50 Dataset",
      href: "https://github.com/sourize/Data-Analysis-of-NIFTY-50-Dataset",
      dates: "Aug 2024",
      active: true,
      description:
        "A Analysis of Nifty 50 Stocks over the years.",
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Data Preprocessing",
        "Data Cleaning",
        "Data Visualization",
      ],
      links: [
        {
          type: "Read More",
          href: "/posts/2024/08/DataAnalysisofNifty50/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sourize/Data-Analysis-of-NIFTY-50-Dataset",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "DA.jpg",
      video: "",
    },
    {
      title: "Energy Consumption Model",
      href: "https://github.com/sourize/EnergyConsumption",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "A Predictive Model to predict Energy Consumption based on some features as input.",
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Data Preprocessing",
        "Data Cleaning",
        "Data Visualization",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Read More",
          href: "/posts/2024/07/EnergyConsumptionModel/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sourize/EnergyConsumption",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Energy2.jpg",
      video: "",
    },
    {
      title: "NIFTY-50 Model",
      href: "https://github.com/sourize/The-Nifty-50-Stock-Prediction-using-Machine-Learning",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A Predictive Model to predict Nifty-50 Stock.",
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Data Preprocessing",
        "Data Cleaning",
        "Data Visualization",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Read More",
          href: "/posts/2024/05/TheNifty50StockPredictionUsingMachineLearning/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sourize/The-Nifty-50-Stock-Prediction-using-Machine-Learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "nift50epg.jpg",
      video:"",
    },
    {
      title: "Real Estate Price Prediction",
      href: "https://github.com/sourize/Real-Estate-Price-Prediction-using-Machine-Learning",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A Predictive Model to predict Real Estate Price based on some features as input.",
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Data Preprocessing",
        "Data Cleaning",
        "Data Visualization",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Read More",
          href: "/posts/2024/07/RealEstatePricePredictionUsingMachineLearning/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sourize/Real-Estate-Price-Prediction-using-Machine-Learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "RealEstate1.jpg",
      video:"",
    },
    {
      title: "Restaurant Review Sentiment Analysis",
      href: "https://github.com/sourize/Restaurant-Review-Sentiment-Analysis-Model",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "An NLP Model to predict whether a review is positive or negative.",
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Data Preprocessing",
        "Data Cleaning",
        "Data Visualization",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Read More",
          href: "/posts/2024/05/TheNifty50StockPredictionUsingMachineLearning/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/sourize/Restaurant-Review-Sentiment-Analysis-Model",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Restaurant1.jpg",
      video:"",
    },
    */
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2024",
      dates: "August 2024 - Present",
      location: "",
      description:
        "Developing a project that can detect oil spills in marine environment using AIS data and Satellite Imagery.",
      image:"SIH-Logo.png",
      links: [
        {
          type: "My Certificate",
          href: "https://drive.google.com/file/d/1UOKtQBU_DYfdNyYWVwgtItTOhUabEaKI/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Read More",
          href: "/blog/SIH2024",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
