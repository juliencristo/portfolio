import { skills } from '@/data/skills';
import SkillCard from './SkillCard';


const SkillsGrid: React.FC = () => {

    return (
        <div className="min-h-screen bg-linear-to-br p-8 mt-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-300 mb-4">
                        Mes Compétences
                    </h1>
                    <p className="text-xl text-gray-400">
                        Un aperçu de mes skills techniques
                    </p>
                </div>
                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsGrid;