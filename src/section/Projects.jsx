import React from "react";

const projects = [
  {
    title: "HR Analytic Dashboard",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aut nemo omnis fugiat, distinctio molestiae doloremque temporibus velit sint quaerat unde repudiandae porro atque, voluptatum nihil nulla. Ipsa, iste sunt!",
    image: "./src/assets/projects/image1.png",
    tags: ["PowerBI", "SSIS", "PostgreSQL"],
    link: "#",
    github: "",
  },
  {
    title: "Sales Analytic Dashboard",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aut nemo omnis fugiat, distinctio molestiae doloremque temporibus velit sint quaerat unde repudiandae porro atque, voluptatum nihil nulla. Ipsa, iste sunt!",
    image: "./src/assets/projects/image1.png",
    tags: ["PowerBI", "Pentaho", "PostgreSQL"],
    link: "#",
    github: "",
  },
  {
    title: "Cookbook",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aut nemo omnis fugiat, distinctio molestiae doloremque temporibus velit sint quaerat unde repudiandae porro atque, voluptatum nihil nulla. Ipsa, iste sunt!",
    image: "./src/assets/projects/image1.png",
    tags: ["HTML", "CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Calculator",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aut nemo omnis fugiat, distinctio molestiae doloremque temporibus velit sint quaerat unde repudiandae porro atque, voluptatum nihil nulla. Ipsa, iste sunt!",
    image: "./src/assets/projects/image1.png",
    tags: ["HTML", "CSS", "javaScript"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0  w-64 h-64 bg-highlight/5 rounded-full blulr-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-fg text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-delay-100 text-secondary-fg">Project that
            <span className="font-serif italic font-normal text-primary"> make an impact.</span>
          </h2>
          <p className="text-muted-fg animate-fade-in animate-delay-100">a selection of my recent works, from web application to dashboards</p>
        </div>

        {/* projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{animationDelay: `${(idx + 1) * 100}ms`}}>
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700
              group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
