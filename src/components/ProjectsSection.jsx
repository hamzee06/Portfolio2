import { ArrowRight, ExternalLink } from 'lucide-react'; // Example, assuming a library like lucide-react
import { Github } from 'lucide-react'; // Example, assuming the same library

const projects =[
    {
        id :1,
        title : "The Trinket Bloom",
        description : "An e-commerce website for handmade jewelry and accessories.",
        image: "/Projects/project1.png",
        tags: ["React", "SQLite3"],
        demoUrl: "https://thee-trinket-bloom.vercel.app",
        githubUrl: "https://github.com/hamzee06/Thee-Trinket-Bloom"
    },

    {
        id :2,
        title : "Browser Artifact Timeline Builder",
        description: "A web application to visualize browser artifacts over time.",
        image: "/Projects/project2.png",
        tags: ["React", "Python"],
        demoUrl: "https://browser-artifact-timeline-builder.vercel.app/",
        githubUrl: "https://github.com/hamzee06/BrowserArtifact-TimelineBuilder"
    },




]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I've worked on recently. Click on the project titles to view the live demos or explore the code on GitHub.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                          
                            <h3 className="text-xl font-semi-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} className='text-foreground/80 hover:text-primary transition-colors  duration-300'><ExternalLink size={20}/></a>
                                    <a href={project.githubUrl} className='text-foreground/80 hover:text-primary transition-colors  duration-300'><Github size={20}/></a>
                                </div>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-12'>
                <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/hamzee06' target='_blank' rel='noreferrer'>
                    Check my Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};