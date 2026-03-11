const AboutMe = () => {
    return (
        <section id="about" className="container py-24 sm:py-32">
            <div className="bg-muted/50 border rounded-2xl p-8 md:p-12 lg:p-16">
                <div className="px-4 text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        About Me
                    </h2>
                </div>


                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    {/* Potential Image Placeholder or Decorative Element */}
                    <div className="hidden md:flex justify-center items-center w-full md:w-1/3">
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-linear-to-tr from-primary/20 to-secondary/20 flex items-center justify-center border border-border/50 shadow-xl overflow-hidden">
                            {/* Optional: Add an actual image here if available, or keep as abstract decorative circle */}
                            <span className="text-4xl">👋</span>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Subhash Devkar
                        </h1>
                        <p className="text-xl text-primary font-medium">
                            Full-Stack MERN Developer
                        </p>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I am a full-stack MERN developer focused on building <span className="text-foreground font-semibold">clean, efficient, and scalable</span> web applications. I enjoy working on both frontend and backend, turning ideas into functional products with well-structured code and smooth user experiences.
                            </p>
                            <p>
                                My main strengths include working with <span className="text-foreground font-semibold">JavaScript, React, Node.js, Express, and MongoDB</span>, along with deploying applications to production environments. I believe in writing simple, maintainable code and continuously improving my skills by building real-world projects.
                            </p>
                            <p>
                                My goal is to grow as a strong software engineer and contribute to impactful technology products through <span className="text-foreground font-semibold">consistent learning</span> and disciplined execution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
