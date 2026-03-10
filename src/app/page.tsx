import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TalksSection from "@/components/sections/TalksSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-10 animation-fade-in relative z-10">

      {/* Hero Section */}
      <section id="about" className="flex flex-col gap-6 pt-10 scroll-mt-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-sky-50">
          Hi, I&apos;m Adam Kraft.
        </h1>
        <h2 className="text-xl md:text-2xl text-foreground/80 dark:text-sky-200 font-normal">
          Research Engineer at <a href="https://deepmind.google/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors underline decoration-sky-500/30 underline-offset-4">Google DeepMind</a>.
        </h2>

        {/* Social Links */}
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/adam-kraft-7555b534/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-sky-600 dark:text-sky-200/70 dark:hover:text-sky-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/adamwkraft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-sky-600 dark:text-sky-200/70 dark:hover:text-sky-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </section>

      {/* Extracted Sections */}
      <WorkSection />
      <ProjectsSection />
      <TalksSection />

    </div>
  );
}
