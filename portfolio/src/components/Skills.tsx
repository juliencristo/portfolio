export const Skills = () => {
    return (
        <>
            <div className="mt-10">
                    <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    
                    <div className="flex flex-col items-center">
                        <img src="/skills/javascript.png" alt="JavaScript" className="w-12 h-12 mb-2" />
                        <span className="text-sm">JavaScript</span>
                    </div>  
                </div>
            </div>
        </>
    )
}