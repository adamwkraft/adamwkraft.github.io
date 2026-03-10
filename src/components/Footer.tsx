export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-10 mt-20">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex gap-6">
                    <a href="https://github.com/adamwkraft" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/adam-kraft-7555b534/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                        LinkedIn
                    </a>
                </div>
                <p>© {new Date().getFullYear()} Adam Kraft. All rights reserved.</p>
            </div>
        </footer>
    );
}
