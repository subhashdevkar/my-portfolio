type HeaderTitleProp = {
    title: string;
    boldTitle: string;
    bgBlack: boolean;
}

const HeaderTitle = ({ title, boldTitle, bgBlack }: HeaderTitleProp) => {
    return (
        <h1 className={`${bgBlack ? "bg-black text-white" : ""} font-normal text-center text-5xl sm:p-5 p-1`}>
            <span className="drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]">{title}</span>{" "}
            <span className="font-extrabold">{boldTitle}</span>
        </h1>
    )
}

export default HeaderTitle