import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "Competitive programmer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps Intern",
    company_name: "Alyssum Global Services",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "May 2022 - October 2022",
    points: [
      "Executed infrastructure deployment using Azure Resource Manager,Cloud Formation, and Terraform templates",
      "Automated backups, efficiently using function apps, improving operational efficiency",
      "Implemented Azure Synapse deployment pipeline alerts and Log Analytics for proactive monitoring.",
    ],
  },
  {
    title: "AI Intern",
    company_name: "Alyssum Global Services",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "June 2023 - August 2023",
    points: [
      "Applied abstractive and extractive text summarization techniques through Transfer Learning",
      "Collaborated on Discovery AI projects, contributing to enhanced data analysis and information retrieval.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Actively participated in product development, analysis and documentation",
    ],
  },
  {
    title: "AI intern",
    company_name: "Juggle",
    icon: starbucks,
    iconBg: "#000000",
    date: "Jan 2024 - Present",
    points: [
      "Building production-ready end-to-end AI application with 10,000 initial customer base.",
      "Designing the application architecture and working on image recognition-based systems and AI assistant systems forthe application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Whether working independently or collaboratively, Shashwat contributes positively to the work environment, demonstrating adaptability and a commitment to excellence.",
    name: "Avi Bhardwaj",
    designation: "Team Lead",
    company: "Alyssum Global Services",
    image: "https://raw.githubusercontent.com/shashwat12304/3DPortfolio/main/assets_2/Avi.jpeg",
  },
  {
    testimonial:
      "Shashwat is very dedicated and I always get fascinated seeing his work. His problem-solving abilities and attention to detail were invaluable in handling complex tasks and projects. He can effectively work independently and as part of a team, contributing to a positive and productive work environment.",
    name: "Aditi Jain",
    designation: "DevOps Engineer",
    company: "Alyssum Global Services",
    image: "https://raw.githubusercontent.com/shashwat12304/3DPortfolio/main/assets_2/Aditi%20Jain.jpg",
  },
  {
    testimonial:
      "Shashwat is one of the best engineer that I had pleasure to work with. He is talented, punctual and hardworking. We can always expect work delivery before the deadline.",
    name: "Rishabh Jain",
    designation: "DevOps Engineer",
    company: "Alyssum Global Services",
    image: "https://raw.githubusercontent.com/shashwat12304/3DPortfolio/main/assets_2/rishabh.jpg",
  },
];

const projects = [
  {
    name: "DAKSH",
    description:
      "Cloud-based Federated Learning System for Phishing Detection. Tech stack used for the project include TensorFlow, AWS CLI, S3 buckets, EC2 instances,Federated Learning, NFS, Cron Jobs,pickle files, RNN-GRU model, AWS RDS instance, HTML, CSS and Google DrivetoWeb",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Federated Learning",
        color: "green-text-gradient",
      },
      {
        name: "Amazon Web Services (AWS)",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "GANETIQUE",
    description:
      "Created a CycleGAN model capable of performing Style Transfer. The Generative AI model can take any image input can create Monet Style oil paintings from it. Tech Stack used include TensorFlow, Generative Adversarial Networks (GANs) and Style Transfer",
    tags: [
      {
        name: "Gnenerative AI",
        color: "blue-text-gradient",
      },
      {
        name: "Style Transfer",
        color: "green-text-gradient",
      },
      {
        name: "CycleGANs",
        color: "pink-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rock VS Mine prediction for Submarines",
    description:
      "Developed a Logistic Regression model capable of object identification in submarine environments, bolstering predictive analysis capabilities of a submarine and acting as a defence system.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "NumPy",
        color: "green-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "pink-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
