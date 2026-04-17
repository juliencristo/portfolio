export default function Footer() {
    return (
        <footer className="text-[hsl(var(--primary))] py-6 mt-12 border-t-[hsl(var(--border))]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Julien Cristovao . All rights reserved.</p>
                <p className="text-sm mt-2">Designed and built by me with React and Tailwind CSS.</p>
            </div>
        </footer>
    );
}