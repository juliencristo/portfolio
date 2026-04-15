import { skills } from '@/data/skills';
import SkillCard from './SkillCard';


const SkillsGrid: React.FC = () => {

    return (
        <div className="bg-linear-to-br my-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-300 mb-4">
                        Skills
                    </h1>
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