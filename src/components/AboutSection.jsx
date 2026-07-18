import { Code, Server, Users } from 'lucide-react';

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                About <span className="text-primary">Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6" >
                    <h3 className="text-2xl font-semibold">Web Developer with 3+ Years of Experience</h3>
                        <p className="text-muted-foreground">
  Web Developer with 3+ years of experience delivering responsive, accessible, and high-performance interfaces using
  <span className="text-orange-500"> HTML</span>,
  <span className="text-blue-500"> CSS</span>,
  <span className="text-cyan-400"> React</span> and
  <span className="text-red-500"> Angular</span>. I also work across the backend with
  <span className="text-green-500"> Node.js</span>,
  <span className="text-yellow-500"> Python</span> and
  <span className="text-emerald-500"> Django</span>, backed by databases such as
  <span className="text-blue-400"> MySQL</span> and
  <span className="text-slate-400"> SQLite3</span>, enabling effective end-to-end collaboration across the full stack.
  I enjoy translating UI/UX designs into clean, cross-browser-compatible experiences and thrive in client-facing, multi-disciplinary delivery teams, with growing exposure to API integration, cloud-native concepts, and enterprise-scale architecture.
</p>

<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
    <a href="#contact" className="cosmic-button">
        Get in Touch
    </a>
    <a href="/Projects/Resume1.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
        View CV
           </a>
</div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Code className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground ">Building responsive, accessible, cross-browser interfaces with React, Angular, HTML & CSS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Server className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend & Full-Stack</h4>
                                <p className="text-muted-foreground ">Developing scalable services and APIs with Node.js, Python, and Django, backed by MySQL and SQLite3.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Users className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Collaboration & Delivery</h4>
                                <p className="text-muted-foreground ">Working alongside designers, QA, and DevOps in CI/CD-driven, Git-based workflows within consulting, client-facing teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}