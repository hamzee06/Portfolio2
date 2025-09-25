import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id='hero' className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-x-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground/90 ">
                    <span className="opacity-0 animate-fade-in-delay1">Hi I'm </span>
                    <span className="opacity-0 text-primary animate-fade-in-delay2">Muhammad </span>
                    <spam className="opacity-0 text-gradient  animate-fade-in-delay3">Hamza Rafi</spam>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-in-delay3">
                    I specialize in building robust and dynamic web applications.
                    Leveraging <span className="opacity=0 text-teal-500 animate-fade-in-delay3">Html Css Javascript</span>  for intuitive user interfaces, 
                    React for powerful frontend UI and Node.js framework for Scalable 
                    backend solutions
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay4">
                    <a href="#projects" className="cosmic-button">
                        View My Work 
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}