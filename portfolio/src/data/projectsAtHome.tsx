import { DockerIcon } from "@/components/icons/DockerIcon";
import { NestIcon } from "@/components/icons/NestIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { PrismaIcon } from "@/components/icons/PrismaIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { SymfonyIcon } from "@/components/icons/SymfonyIcon";
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
        description: ".",
        technologies: [<NestIcon />, <PrismaIcon />, <ReactIcon />, <DockerIcon />],
        work: "L'Ecole Française",
        link: "https://cours.lecolefrancaise.fr/",
        image: "./cours.png",
    },
    {
        title: "Tick & Saas",
        description: "Plateforme interne de gestion de contenu.",
        technologies: [<PhpIcon />, <SymfonyIcon />, <ReactIcon />, <DockerIcon />],
        work: "L'Ecole Française",
        link: "https://portail.lecolefrancaise.fr/",
        image: "./Portail.png",
    }

];