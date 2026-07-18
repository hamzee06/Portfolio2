import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Trinket Bloom",
    description: "An e-commerce website for handmade jewelry and accessories.",
    image: "/Projects/project1.png",
    tags: ["React", "SQLite3"],
    demoUrl: "https://thee-trinket-bloom.vercel.app",
    githubUrl: "https://github.com/hamzee06/Thee-Trinket-Bloom",
  },
  {
    id: 2,
    title: "Browser Artifact Timeline Builder",
    description: "A web application to visualize browser artifacts over time.",
    image: "/Projects/project2.png",
    tags: ["React", "Python"],
    demoUrl: "https://browser-artifact-timeline-builder.vercel.app/",
    githubUrl: "https://github.com/hamzee06/BrowserArtifact-TimelineBuilder",
  },
  {
    id: 3,
    title: "California Boutique",
    description:
      "A high-end, mobile-first e-commerce storefront with a React + Vite frontend and a Node.js/Express REST API powering products, collections, cart, orders, and newsletter signups.",
    image: "/Projects/project3.png",
    tags: ["React", "Vite", "Node.js", "Express", "Tailwind CSS"],
    demoUrl: "https://california-boutique.vercel.app/",
    githubUrl: "https://github.com/hamzee06/California-Boutique",
  },
  {
    id: 4,
    title: "Performance Measurement Plan",
    description:
      "A full-stack performance management system for employee registration, role management, and review workflows — tracking execution metrics across 50+ active projects and cutting reporting latency by 80%.",
    image: "/Projects/project4.png",
    tags: ["React", "TypeScript", "ASP.NET Core", "SQL Server", "Entity Framework Core"],
    githubUrl: "https://github.com/hamzee06/PMP",
  },
];

// ✅ Add your certificate image files here
const certificates = [
  {
    id: 1,
    title: "NCFL Internship Certificate",
    image: "/Projects/NCFL Certificate.png", // path inside public/
  },
  {
    id: 2,
    title: "Speridian Technologies Internship Certificate",
    image: "/Projects/Speridian Certificate.jpg", // path inside public/
  },
];

export const ProjectsSection = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on the
          project titles to view the live demos or explore the code on GitHub.
        </p>

        {/* ==== Project Cards ==== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==== Buttons ==== */}
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/hamzee06"
            target="_blank"
            rel="noreferrer"
          >
            Check my Github <ArrowRight size={16} />
          </a>

          <button
            onClick={() => setShowCertificates(!showCertificates)}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            {showCertificates ? "Hide Certificates" : "View Certificates"}
          </button>
        </div>

        {/* ==== Certificates Section ==== */}
        {showCertificates && (
          <div className="mt-10 bg-card p-6 rounded-lg shadow-md animate-fadeIn">
            <h3 className="text-2xl font-bold mb-4 text-center text-primary">
              Certificates
            </h3>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  {cert.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
