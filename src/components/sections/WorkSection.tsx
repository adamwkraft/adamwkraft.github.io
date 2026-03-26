

export default function WorkSection() {
    return (
        <section id="work" className="scroll-mt-24 pt-16 flex flex-col gap-10 border-t border-sky-100 dark:border-sky-900/40">
            <header>
                <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-sky-50">
                    Professional Experience
                </h2>
            </header>

            <div className="flex flex-col gap-12 mt-4">
                {/* Google (2019-Present) */}
                <div className="flex flex-col gap-2 relative border-l border-sky-200 dark:border-sky-800 pl-6">
                    <div className="absolute w-3 h-3 bg-foreground dark:bg-sky-400 rounded-full -left-[6.5px] top-2"></div>
                    <h3 className="text-xl font-semibold text-foreground dark:text-sky-50">
                        Research Engineer
                    </h3>
                    <h4 className="text-lg text-foreground/70 dark:text-sky-200/70">
                        Google Brain / Google DeepMind• 2019 - Present
                    </h4>
                    <p className="text-foreground/90 dark:text-sky-100/90 mt-2 leading-relaxed">
                        Joined Google Brain in 2019 (merged with DeepMind in 2023).
                        Specializing in Personalization for Large Language Models (LLMs) and Large Recommendation Models (LRMs), Data Efficiency, Model Efficiency.
                        Orchestrated 20+ successful launches across Gemini, Search, Ads, Play, and Cloud Vertex AI, resulting in +$xxxMM, a +x% boost to top-line metrics (Play), and widespread model efficiency gains.
                    </p>
                </div>

                {/* Orbital Insight */}
                <div className="flex flex-col gap-6 relative border-l border-sky-200 dark:border-sky-800 pl-6">
                    <div className="absolute w-3 h-3 bg-sky-300 dark:bg-sky-700 rounded-full -left-[6.5px] top-2"></div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground dark:text-sky-50">
                            Machine Learning Engineer
                        </h3>
                        <h4 className="text-lg text-foreground/70 dark:text-sky-200/70">
                            Orbital Insight • 2015 - 2019
                        </h4><p className="text-foreground/90 dark:text-sky-100/90 mt-2 leading-relaxed">
                            Used large scale Machine Learning to analyze millions of satellite and remote sensing images. Applications included counting cars in parking lots to measure economic activity, tracking new development of buildings and roads, monitoring oil tank levels, and tracking natural resources (water, forests).
                        </p>
                        <p className="text-foreground/90 dark:text-sky-100/90 mt-2 leading-relaxed">
                            Work Topics: Computer Vision, Machine Learning and Deep Learning, Segmentation (Semantic and Instance), Image Classification, Object Detection, Domain Adaptation and Transfer Learning
                        </p>
                    </div>

                    {/* <div className="flex flex-col gap-3">
                        <h5 className="font-semibold text-foreground dark:text-sky-100">Residential Housing Construction Monitoring (2018)</h5>
                        <p className="text-foreground/90 dark:text-sky-100/90 leading-relaxed text-sm">
                            Partnered with Meyers Research to detect different stages of housing construction using satellite imagery and monitor new houses over time.
                        </p>
                        <div className="relative w-full max-w-2xl h-64 md:h-96 rounded-lg overflow-hidden border border-sky-200 dark:border-sky-800 mt-2">
                            <Image src="/assets/housing_construction.png" alt="Housing Construction Monitoring" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <h5 className="font-semibold text-foreground dark:text-sky-100">Estimating Spatial Density Functions from Satellite Imagery</h5>
                        <p className="text-foreground/90 dark:text-sky-100/90 leading-relaxed text-sm">
                            Used weak labels in the form of differently shaped polygons to try to learn fine-grained details, training with population data to identify residential housing areas.
                        </p>
                        <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden border border-sky-200 dark:border-sky-800 mt-2">
                            <Image src="/assets/region_aggregation.png" alt="Region Aggregation" fill className="object-contain bg-white dark:bg-black" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <h5 className="font-semibold text-foreground dark:text-sky-100">Deforestation Detection and Land Use Monitoring (2015)</h5>
                        <p className="text-foreground/90 dark:text-sky-100/90 leading-relaxed text-sm">
                            Partnered with the World Resources Institute using deep learning classifier to detect water, roads, buildings, forests, and other land uses, along with change detection algorithms to monitor deforestation worldwide.
                        </p>
                        <div className="relative w-full max-w-2xl h-64 md:h-96 rounded-lg overflow-hidden border border-sky-200 dark:border-sky-800 mt-2">
                            <Image src="/assets/deforestation.png" alt="Deforestation Detection" fill className="object-contain bg-white dark:bg-black" />
                        </div>
                    </div> */}
                </div>

                {/* A9 / Amazon */}
                <div className="flex flex-col gap-6 relative border-l border-sky-200 dark:border-sky-800 pl-6">
                    <div className="absolute w-3 h-3 bg-sky-300 dark:bg-sky-700 rounded-full -left-[6.5px] top-2"></div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground dark:text-sky-50">
                            Machine Learning Software Engineer
                        </h3>
                        <h4 className="text-lg text-foreground/70 dark:text-sky-200/70">
                            A9 / Amazon • 2012-2015
                        </h4>
                    </div>

                    {/* <div className="flex flex-col gap-3">
                        <h5 className="font-semibold text-foreground dark:text-sky-100">Amazon Gift Card Recognition (2014)</h5>
                        <p className="text-foreground/90 dark:text-sky-100/90 leading-relaxed text-sm">
                            Designed and implemented Amazon&apos;s Gift Card Scanning feature from R&D to production, released in early 2015.
                        </p>
                        <div className="relative w-full max-w-md h-48 md:h-64 rounded-lg overflow-hidden border border-sky-200 dark:border-sky-800 mt-2">
                            <Image src="/assets/gift_card.png" alt="Amazon Gift Card Scan" fill className="object-contain bg-white dark:bg-black" />
                        </div>
                    </div> */}

                    <p className="text-foreground/90 dark:text-sky-100/90 mt-2 leading-relaxed">
                        Part of the Visual Search research team in Palo Alto, helping customers search for millions of Amazon products through the “Search by Camera” feature. I led the “Scan to Claim” Gift Card feature from research and development all the way to production. Other projects also used computer vision and machine learning to help power similarity search and other web shopping applications.
                    </p>
                    <p className="text-foreground/90 dark:text-sky-100/90 mt-2 leading-relaxed">
                        Work Topics: Computer Vision, Machine Learning and Deep Learning, Image Classification, Image Segmentation, Instance Matching, Similarity Matching and Category Recognition, Domain Adaptation and Transfer Learning, Multi-frame tracking and stitching
                    </p>
                </div>
            </div>
        </section>
    );
}
