import { WORKS_DATA } from "@/constants";
import WorkBox from "./WorkBox";
import HeaderTitle from "./HeaderTitle";

const Works = () => {
    return (
        <section className="py-20">
            {/* <h2 className="text-3xl md:text-4xl py-1 font-bold mb-12 text-center bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                My Works
            </h2> */}
            <HeaderTitle title="work" boldTitle="experience" />
            <p className="text-slate-500 text-center mt-2 max-w-lg mx-auto">
                Here are some of my works that I have done.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 container px-4 sm:px-6">
                {WORKS_DATA.map((w) => (
                    <WorkBox key={w.id} work={w} />
                ))}
            </div>
        </section>
    );
};

export default Works;
