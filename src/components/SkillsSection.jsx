import { Briefcase } from 'lucide-react';

const skills = [
    // Frontend
    { name: "HTML, CSS", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "Angular", level: 85, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "Backend" },

    // Tools
    { name: "Github", level: 85, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },
];

export const SkillsSection = () => {
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.keys(skillsByCategory).map((category) => (
                        <div key={category} className="p-6 rounded-lg bg-gray-700/20 card-hover">
                            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                                <Briefcase className="h-5 w-5" />
                                {category}
                            </h3>
                            <div className="space-y-4">
                                {skillsByCategory[category].map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="font-medium">{skill.name}</p>
                                            <span className="text-sm text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-500/30 h-2 rounded-full">
                                            <div
                                                className="bg-primary h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};