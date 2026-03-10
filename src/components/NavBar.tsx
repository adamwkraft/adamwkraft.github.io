import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity">
                    Adam Kraft
                </Link>
                <div className="flex gap-6 text-sm font-medium text-foreground/80 dark:text-sky-200">
                    <Link href="/#work" className="hover:text-foreground dark:hover:text-sky-50 transition-colors">Work</Link>
                    <Link href="/#projects" className="hover:text-foreground dark:hover:text-sky-50 transition-colors">Projects</Link>
                    <Link href="/#talks" className="hover:text-foreground dark:hover:text-sky-50 transition-colors">Talks</Link>
                </div>
            </div>
        </nav>
    );
}
