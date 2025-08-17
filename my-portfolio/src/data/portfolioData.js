// src/data/portfolioData.js - ตัวอย่างที่นักศึกษาต้องทำ
export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Intro",
    image: "/images/intro.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://my-ecommerce-demo.netlify.app",
    githubUrl: "https://htmlpreview.github.io/?https://github.com/BorwonratSE/portfolio-website/blob/main/index.html",
    featured: true
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    image: "/images/weather.png",
    technologies: ["React", "OpenWeather API", "CSS3"],
    demoUrl: "https://my-weather-app.netlify.app",
    githubUrl: "https://htmlpreview.github.io/?https://github.com/BorwonratSE/my-weather-app/blob/main/index.html",
    featured: false
  },
  {
    id: 3,
    title: "Blender",
    description: "3D Model",
    image: "/images/blender.png",
    technologies: ["Blender"],
    demoUrl: "",
    githubUrl: "",
    featured: false
  },

  // นักศึกษาเพิ่มอย่างน้อย 3 projects
];