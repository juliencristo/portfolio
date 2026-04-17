import { DockerIcon } from "@/components/icons/DockerIcon";
import { GraphQlIcon } from "@/components/icons/GraphQlIcon";
import { NestIcon } from "@/components/icons/NestIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { PrismaIcon } from "@/components/icons/PrismaIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { SymfonyIcon } from "@/components/icons/SymfonyIcon";
import { WordpressIcon } from "@/components/icons/WorpressIcon";
import type { WorksProps } from "@/types/IWorks";


export const projectsAtHomeData : WorksProps[] = [
    {
        title: "SkillFusion",
        description: "Projet de fin d'études - Plateforme de tutos en ligne",
        technologies: [<NestIcon />, <NextIcon />, <PrismaIcon/>, <DockerIcon />],
        work: "",
        link: "https://github.com/O-clock-Geri/projet-04-skill-fusion",
        image: "./SkillFusion.png",
    },
    {
        title: "Presto-Go",
        description: "Api GraphQl et application React Native pour la gestion de commandes de restauration.",
        technologies: [<NestIcon />, <PrismaIcon />, <ReactIcon />, <DockerIcon />, <GraphQlIcon />],
        work: "",
        link: "https://github.com/juliencristo/Presto-Go",
        image: "./presto-go.png",
    },
    {
        title: "Tick & Saas",
        description: "Api GraphQl et Application pour la gestion des incidents dans les projets informatiques.",
        technologies: [<PhpIcon />, <SymfonyIcon />, <ReactIcon />, <DockerIcon />, <GraphQlIcon />],
        work: "",
        link: "https://portail.lecolefrancaise.fr/",
        image: "./Portail.png",
    },
    {
        title: "Perinatal Marketing Website (Petits-Trésors)",
        description: "Site vitrine pour une accompagnante en périnatalité.",
        technologies: [<WordpressIcon />],
        work: "Maintenance et évolution du site",
        link: "https://petits-tresors-perinatalite.com/",
        image: "./petits-tresors.png",
    }

];