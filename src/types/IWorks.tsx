import type { ReactNode } from "react"

export interface WorksProps {
    title: string;
    description?: string;
    technologies: ReactNode[] | string[]; 
    work: string;
    link: string;
    image: string;
}