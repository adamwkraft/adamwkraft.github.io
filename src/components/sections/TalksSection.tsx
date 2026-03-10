export default function TalksSection() {
    const talks = [
        {
            title: "RE-WORK MLOps Summit",
            event: "RE-WORK MLOps Summit",
            date: "2022",
            description: "",
            link: "https://aiml.events/events/mlops-summit-2022",
        },
        {
            title: "RE-WORK Deep Learning Hybrid Summit Speaker",
            event: "RE-WORK Deep Learning Hybrid Summit",
            date: "2022",
            description: "",
            link: "",
        },
        {
            title: "Computer Vision Summit 2020",
            event: "Computer Vision Summit",
            date: "2020",
            description: "",
            link: "https://aiml.events/events/computer-vision-summit-silicon-valley-2020",
        },
        {
            title: "Perceive 2020 Conference",
            event: "Perceive Conference",
            date: "2020",
            description: "",
            link: "https://www.youtube.com/watch?v=OvmesK5qNPE&list=PLs05ayZZ-2yg02sEAQ2Ffah2ilDYmc4Ch&index=13&t=6s",
        },
        {
            title: "Challenges and Approaches for Extracting Meaning from Satellite Imagery",
            event: "Embedded Vision Summit",
            date: "2019",
            description: "",
            link: "https://www.embedded-vision.com/summit/challenges-and-approaches-extracting-meaning-satellite-imagery",
        },
        {
            title: "Satellite Imagery and AI for Humanitarian Efforts",
            event: "AI for Mankind's Tech Talk",
            date: "2019", // Assumed from context, can be adjusted if needed
            description: "",
            link: "https://www.youtube.com/watch?v=0Ubqfl8k7Ds",
        },
        {
            title: "Artificial intelligence at Orbital Insight",
            event: "@Scale",
            date: "2018",
            description: "",
            link: "https://atscaleconference.com/videos/scale-2018-artificial-intelligence-at-orbital-insight/",
        },
        {
            title: "Latest Innovations in Deep Learning Panel",
            event: "Ideo to IPO",
            date: "2018", // Assumed from context, can be adjusted if needed
            description: "",
            link: "https://www.youtube.com/watch?v=CCfOEGjBkSs",
        },
    ];

    return (
        <section id="talks" className="scroll-mt-24 pt-16 flex flex-col gap-10 border-t border-sky-100 dark:border-sky-900/40">
            <header>
                <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-sky-50">
                    Talks
                </h2>
                <p className="text-lg text-foreground/80 dark:text-sky-100/80 mt-4">
                    Presentations on machine learning, systems, and research.
                </p>
            </header>

            <div className="flex flex-col gap-8 mt-4">
                {talks.map((talk, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-12 py-6 border-b border-sky-100 dark:border-sky-900/40 last:border-0">
                        <div className="md:w-32 flex-shrink-0 text-foreground/50 dark:text-sky-400/80 font-mono text-sm mt-1">
                            {talk.date}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-foreground dark:text-sky-100">
                                {talk.link ? (
                                    <a href={talk.link} className="hover:underline">
                                        {talk.title}
                                    </a>
                                ) : (
                                    <span>{talk.title}</span>
                                )}
                            </h3>
                            <h4 className="text-base text-foreground/70 dark:text-sky-200/70 font-medium">
                                {talk.event}
                            </h4>
                            <p className="text-foreground/90 dark:text-sky-100/90 mt-2 leading-relaxed">
                                {talk.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
