import React, { useState } from 'react';
import { Code, Database, Palette, Zap, Cloud, Shield, Terminal, Dock } from 'lucide-react';
import type { SkillProps } from '@/types/ISkills';
import { Link } from 'react-router';

const SkillCard: React.FC<{ skill: SkillProps }> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            code: <Code size={32} />,
            database: <Database size={32} />,
            palette: <Palette size={32} />,
            zap: <Zap size={32} />,
            cloud: <Cloud size={32} />,
            shield: <Shield size={32} />,
            terminal: <Terminal size={32} />,
            dock: <Dock size={32} />
        };
        return icons[iconName] || <Code size={32} />;
    };

    return (
        
        <Link to={skill.url} target="_blank" rel="noopener noreferrer"
            className="relative overflow-hidden rounded-xl p-6 transition-all duration-300 cursor-pointer"
            style={{
                background: isHovered
                    ? `linear-gradient(135deg, ${skill.color}20 0%, ${skill.color}40 100%)`
                    : `linear-gradient(135deg, ${skill.color}10 0%, ${skill.color}20 100%)`,
                border: `2px solid ${isHovered ? skill.color : skill.color + '40'}`,
                transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: isHovered
                    ? `0 20px 40px ${skill.color}30`
                    : '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Icon */}
            <div
                className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg transition-transform duration-300"
                style={{
                    backgroundColor: skill.color + '20',
                    color: skill.color,
                    transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0) scale(1)'
                }}
            >
                {getIcon(skill.icon)}
            </div>

            {/* Skill Name */}
            <h3 className="text-xl font-bold mb-2 text-gray-200">
                {skill.name}
            </h3>

            {/* Decorative elements */}
            <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 transition-all duration-500"
                style={{
                    backgroundColor: skill.color,
                    transform: isHovered ? 'scale(1.5)' : 'scale(1)'
                }}
            />
        </Link>
    );
};
export default SkillCard;