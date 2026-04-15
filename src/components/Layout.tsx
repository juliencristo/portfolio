export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    )
}
