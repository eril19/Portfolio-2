import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing scalable, maintainable code that is clean",
    },
    {
      icon: Rocket,
      title: "Clean Code",
      desc: "Writing scalable, maintainable code that is clean",
    },
    {
      icon: Lightbulb,
      title: "Clean Code",
      desc: "Writing scalable, maintainable code that is clean",
    },
    {
      icon: Users,
      title: "Clean Code",
      desc: "Writing scalable, maintainable code that is clean",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-fg text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in leading-tight animate-fade-in animate-delay-100 text-secondary-fg">
              Building the future,
              <span className="font-seerif italic font-normal text-primary">
                One component at a time.
              </span>
            </h2>

            <div className="text-muted-fg space-y-4 animate-delay-200 adnimate-fade-in">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                temporibus, voluptates dolor id facilis quo dolore quod
                voluptatem. Sapiente repellendus dolorum quas sit veritatis
                dolores quam voluptas debitis enim corrupti.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                maiores inventore itaque quas. Vitae vero autem, aperiam
                deleniti nemo alias maiores, accusantium fugiat totam, vel
                consequatur unde porro non atque.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                non harum corrupti, rerum ducimus facere molestiae voluptatum
                rem. Hic dolor est in, veritatis cupiditate autem et iste culpa
                sint. Voluptate.
              </p>
            </div>

            <div className="font-medium italic text-fg glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300 text-lg">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                vero esse sapiente debitis eveniet facilis mollitia ducimus
                nulla quos perspiciatis placeat possimus, deleniti explicabo
                suscipit, a consequuntur rerum enim cum."
              </p>
            </div>
          </div>

          {/* Right Column - highlight*/}
          <div className="grid sm:grid-cols-2 gap-6 ">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-fg">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
