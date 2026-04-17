import { DockerIcon } from "@/components/icons/DockerIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { SymfonyIcon } from "@/components/icons/SymfonyIcon";
import { WordpressIcon } from "@/components/icons/WorpressIcon";
import type { WorksProps } from "@/types/IWorks";

export const projectsAtWorkData : WorksProps[] = [
    {
        title: "Certification Platform",
        description: "Site permettant de passer une certification en ligne.",
        technologies: [<PhpIcon />, <SymfonyIcon />, "Twig", <DockerIcon />],
        work: "Refonte totale du passage d'une certification de la gestion des notes, rattrapages des examens pondération",
        link: "https://macertification.org/",
        image: "./ma-certif.png",
    },
    {
        title: "E-Learning Platform",
        description: "Plateforme de cours en ligne.",
        technologies: [<WordpressIcon />, <PhpIcon />, <ReactIcon />, <DockerIcon />],
        work: "Création et optimisation d'un plugin Wordpress maison sur une base de Learndash.",
        link: "https://cours.lecolefrancaise.fr/",
        image: "./cours.png",
    },
    {
        title: "Internal Management System",
        description: "Outils internes pour les équipes opérationnelles.",
        technologies: [<PhpIcon />, <SymfonyIcon />, <ReactIcon />, <DockerIcon />],
        work: "L'Ecole Française",
        link: "https://portail.lecolefrancaise.fr/",
        image: "./Portail.png",
    },
    {
        title: "Interior Design Marketing Website (Maom)",
        description: "Site vitrine pour une décoratrice d'intérieur",
        technologies: [<PhpIcon />, <SymfonyIcon />, <ReactIcon />],
        work: "Conception et développement du site.",
        link: "https://www.instagram.com/atelier.maom/",
        image: "./projet_maom.png",
    }

];