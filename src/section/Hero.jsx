import React from "react";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";

const Hero = () => {
  const socialLinks = [
    { iconName: "FaGithub", lib: FaIcons, href: "https://github.com" },
    { iconName: "FaLinkedin", lib: FaIcons, href: "https://linkedin.com" },
    {
      iconName: "IoLogoInstagram",
      lib: IoIcons,
      href: "https://instagram.com",
    },
  ];

  const techSkills = [
    "SSIS",
    "SSRS",
    "Tableau",
    "PowerBI",
    "Microsoft SQL Server",
    "PostgreSQL",
    "ReactJS",
    "HTML",
    "CSS",
    "JavaScript",
    "AngularJS",
    "Java",
    "TypeScript",
    "Python",
    "Apache Sparks",
    "Apache Airflow",
    "Google Big Query",
    "Hadoop",
    "Kafka",
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        {/* Gambar Mode Terang: Muncul secara default, tersembunyi saat dark mode */}
        <img
          src="./src/assets/hero-light-mode-alt.png"
          alt="hero banner light"
          className="w-full h-full object-cover opacity-40 block dark:hidden"
        />

        {/* Gambar Mode Gelap: Tersembunyi secara default, muncul saat dark mode */}
        <img
          src="./src/assets/hero-dark-mode.png" // Ganti sesuai nama file gambar gelap Anda
          alt="hero banner dark"
          className="w-full h-full object-cover opacity-40 hidden dark:block"
        />

        {/* Efek Gradient Overlays yang dinamis mengikuti warna variabel --color-background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/60 to-background"></div>
      </div>

      {/* DOTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          // Menghitung koordinat di luar return JSX untuk menghindari deteksi error "impure"
          const randomTop = `${Math.random() * 100}%`;
          const randomLeft = `${Math.random() * 100}%`;

          return (
            <div
              key={i} // Ditambahkan agar React tidak memunculkan peringatan "missing key"
              className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-primary slow-drift"
              style={{
                top: randomTop, // MENGGUNAKAN TOP: Membuat titik menyebar ke tengah dan bawah
                left: randomLeft, // MENGGUNAKAN LEFT: Membuat titik menyebar ke kanan dan kiri
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* CONTENT */}
      <div className="container pb-20 relative z-10 mx-auto pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12  items-center">
          {/* left col */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Data Engineer • ETL Developer
              </span>
            </div>
          </div>

          {/* headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
              From
              <span className="text-primary glow-text"> raw data</span>
              <br /> to <br />
              <span className="text-primary glow-text">refined insights,</span>
              <br />
              <span className="font-serif italic font-normal ">
                seamlessly.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-delay-300 animate-fade-in">
              Hi, I'm Eril – a data engineer specializing in Python, SQL, and
              ETL automation. I build robust data pipelines and turn raw numbers
              into clear, impactful insights through visual reporting.
            </p>
          </div>

          {/* CTA */}
          <div className="">
            <Button>
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
            <span className="text-sm text-muted-foreground">Follow Me:</span>
            {socialLinks.map((social, i) => {
              const IconComponent = social.lib[social.iconName];
              return (
                <a
                  href={social.link}
                  key={i}
                  className="text-gray-600 hover:bg-primary/10 hover:text-primary p-2 rounded-full glass transition-all duration-200"
                >
                  {/* {<social.icon />} */}
                  {IconComponent ? (
                    <IconComponent size={24} className="w-5 h-5" />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        {/* right col */}
        <div className="relative animate-delay-300 animate-fade-in">
          {/* profile image */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br-from-primary/30 via-transparent-to-primary/10 blur-2xl animate-pulse" />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src=""
                alt="profile pic"
                className="w-full aspect-[4/5] rounded-2xl object-cover"
              />

              {/* floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-md">Open to Work</span>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-xs text-muted-foreground">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-sm muted-foreground-color mb-6 text-center">
            {" "}
            Tech Skills
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...techSkills, ...techSkills].map((skill, i) => (
                <div className="flex-shrink-0 px-8 py-4" key={i}>
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
