import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { projectsAtWorkData } from "@/data/projectsAtWorkData";
import { projectsAtHomeData } from "@/data/projectsAtHome";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export function Projects() {
    return (
        <div className="py-12">
            <h1 className="text-5xl font-bold text-center mb-8">Projects</h1>
            <h2 className="text-2xl font-bold mb-4">At Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projectsAtWorkData.map((project, index) => (
                    <HoverCard>
                        <HoverCardContent className="w-80 bg-[hsl(var(--muted))] text-[hsl(var(--primary))] p-4 border-[hsl(var(--border))]">
                            {project.work && <p className="text-sm italic mb-2">{project.work}</p>}
                        </HoverCardContent>
                        <HoverCardTrigger asChild>
                            <Link to={project.link} key={index}>
                                <Card
                                    key={index}
                                    className="flex flex-col h-full bg-[hsl(var(--card))] border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition-colors duration-300"
                                >
                                    <CardHeader>
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="grow">
                                        <div className="flex flex-wrap gap-1">
                                            <img src={project.image} alt={project.title} className="w-full min-h-30 max-h-30 rounded" />
                                            <CardDescription className="w-full min-h-15 max-h-15 pt-2">{project.description}</CardDescription>
                                            {project.technologies.map((tech, i) => (
                                                <Badge
                                                    key={i}
                                                    className="text-sm rounded flex items-center gap-1"
                                                >
                                                    <div className="w-6 h-6 align-middle">
                                                        {tech}
                                                    </div>
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </HoverCardTrigger>

                    </HoverCard>
                ))}
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-4">At Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projectsAtHomeData.map((project, index) => (
                    <Link to={project.link} key={index}>
                        <Card
                            key={index}
                            className="flex flex-col h-full bg-[hsl(var(--card))] border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition-colors duration-300"
                        >
                            <CardHeader>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-1">
                                    <img src={project.image} alt={project.title} className="w-full h-auto rounded" />
                                    <CardDescription className="w-full min-h-15 pt-2">{project.description}</CardDescription>
                                    {project.technologies.map((tech, i) => (
                                        <Badge
                                            key={i}
                                            className="text-sm rounded flex items-center gap-1"
                                        >
                                            <div className="w-6 h-6">
                                                {tech}
                                            </div>
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}