import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Personal Intelligence for Gemini and Google AI Mode",
            description: (
                <>
                    Personal Intelligence securely connects information from apps like Gmail and Google Photos to make Gemini uniquely helpful. It connects Gmail, Photos, YouTube and Search in a single tap to provide better, more personalized answers and proactive suggestions based on your personal context.<br /><br />
                    <span className="text-sm text-foreground/70 dark:text-sky-200/70">
                        <strong>Gemini Team, Google Labs</strong>
                    </span>
                </>
            ),
            link: "https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/",
            year: "2026",
            images: ["/assets/personal_intelligence.jpg"]
        },
        {
            title: "Gemini 2.5: Pushing the Frontier with Advanced Reasoning, Multimodality, Long Context, and Next Generation Agentic Capabilities",
            description: (
                <>
                    We introduce the Gemini 2.X model family: Gemini 2.5 Pro and Gemini 2.5 Flash, as well as our earlier Gemini 2.0 Flash and Flash-Lite models. Gemini 2.5 Pro is our most capable model yet, achieving SoTA performance on frontier coding and reasoning benchmarks.<br /><br />
                    <span className="text-sm text-foreground/70 dark:text-sky-200/70">
                        <strong>Gemini Team, Google</strong>
                    </span>
                </>
            ),
            link: "https://arxiv.org/abs/2507.06261",
            year: "2025",
            images: ["/assets/gemini_2_5_logo.png"]
        },
        {
            title: "Cross-Batch Aggregation for Streaming Learning from Label Proportions in Industrial-Scale Recommendation Systems",
            description: (
                <>
                    RecSys 2025. We introduce Cross-Batch Aggregate (XBA) loss, a pointwise loss designed to approximate aggregate loss in streaming environments where event-level labels are missing.<br /><br />
                    <span className="text-sm text-foreground/70 dark:text-sky-200/70">
                        Jonathan Valverde, Tiansheng Yao, Xiang Li, Yuan Gao, Yin Zhang, Andrew Evdokimov, <strong>Adam Kraft</strong>, Samuel Ieong, Jerry Zhang, Ed H. Chi, D. Cheng, Ruoxi Wang
                    </span>
                </>
            ),
            link: "https://dl.acm.org/doi/10.1145/3705328.3748115",
            year: "2025",
            images: ["/assets/cross_batch_attention.png"]
        },
        {
            title: "STAR: A Simple Training-free Approach for Recommendations using Large Language Models",
            description: (
                <>
                    We propose a Simple Training-free Approach for Recommendation (STAR), a framework that utilizes LLMs and can be applied to various recommendation tasks without the need for fine-tuning, while maintaining high quality recommendation performance.<br /><br />
                    <span className="text-sm text-foreground/70 dark:text-sky-200/70">
                        Dong-Ho Lee*, <strong>Adam Kraft*</strong>, Long Jin, Nikhil Mehta, Taibai Xu, Lichan Hong, Ed H. Chi, Xinyang Yi
                    </span>
                </>
            ),
            link: "https://arxiv.org/abs/2410.16458",
            year: "2024",
            images: ["/assets/star_motivation.png"]
        },
        {
            title: "Leveraging LLM Reasoning Enhances Personalized Recommender Systems",
            description: (
                <>
                    Accepted to ACL 2024 (Co-first author). We propose a novel framework that leverages the reasoning capabilities of Large Language Models (LLMs) to enhance personalized recommender systems, improving both recommendation quality and interpretability.<br /><br />
                    <span className="text-sm text-foreground/70 dark:text-sky-200/70">
                        Alicia Y. Tsai*, <strong>Adam Kraft*</strong>, Long Jin, Chenwei Cai, Anahita Hosseini, Taibai Xu, Zemin Zhang, Lichan Hong, Ed H. Chi, Xinyang Yi
                    </span>
                </>
            ),
            link: "https://arxiv.org/abs/2408.00802",
            year: "2024",
            images: ["/assets/reasoning_eval.png"]
        },
        {
            title: "PyGlove: Symbolic Programming for Automated Machine Learning",
            description: (
                <>
                    NeurIPS 2020 (Oral Presentation). We introduce PyGlove, a new Python library that reformulates AutoML as an automated process of symbolic manipulation, decoupling the search algorithm, the search space, and the child program.<br /><br />
                    <span className="text-sm text-foreground/70 dark:text-sky-200/70">
                        Daiyi Peng, Xuanyi Dong, Esteban Real, Mingxing Tan, Yifeng Lu, Hanxiao Liu, Gabriel Bender, <strong>Adam Kraft</strong>, Chen Liang, Quoc V. Le
                    </span>
                </>
            ),
            link: "https://proceedings.neurips.cc/paper/2020/file/012a91467f210472fab4e11359bbfef6-Paper.pdf",
            year: "2020",
            images: ["/assets/pyglove_overview.png"]
        },
        {
            title: "A weakly supervised approach for estimating spatial density functions from high-resolution satellite imagery",
            description: (
                <>
                    SIGSPATIAL 2018. We propose a regional aggregation layer, a novel neural network component that allows a pixel-level density estimator to be trained using only coarse-grained density aggregates.<br /><br />
                    <span className="text-sm text-foreground/70 dark:text-sky-200/70">
                        Nathan Jacobs, <strong>Adam Kraft</strong>, Muhammad Usman Rafique, Ranti Dev Sharma
                    </span>
                </>
            ),
            link: "https://dl.acm.org/doi/10.1145/3274895.3274934",
            year: "2018",
            images: ["/assets/region_aggregation.png"]
        },
    ];

    return (
        <section id="projects" className="scroll-mt-24 pt-16 flex flex-col gap-10 border-t border-sky-100 dark:border-sky-900/40">
            <header>
                <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-sky-50">
                    Selected Papers and Projects
                </h2>
            </header>

            <div className="flex flex-col gap-8 mt-4">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row gap-8 p-6 border border-sky-200 dark:border-sky-800/60 rounded-2xl bg-white/60 dark:bg-sky-950/20 backdrop-blur-sm"
                    >
                        {project.images && (
                            <div className="w-full md:w-2/5 shrink-0 flex flex-col gap-4">
                                {project.images.map((img, imgIdx) => (
                                    <div key={imgIdx} className="relative w-full h-76 md:h-76 rounded-lg overflow-hidden border border-sky-200 dark:border-sky-800">
                                        <Image src={img} alt={`${project.title} screenshot ${imgIdx + 1}`} fill className="object-contain bg-white/50 dark:bg-black/20 p-2" />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4 gap-4">
                                <h3 className="font-semibold text-xl text-foreground dark:text-sky-100">
                                    <a href={project.link} className="hover:underline">{project.title}</a>
                                </h3>
                                <span className="text-xs font-mono shrink-0 text-foreground/60 bg-sky-100 dark:text-sky-300 dark:bg-sky-900 px-2 py-1 rounded">
                                    {project.year}
                                </span>
                            </div>
                            <p className="text-foreground/80 dark:text-sky-100/80 leading-relaxed text-base">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
