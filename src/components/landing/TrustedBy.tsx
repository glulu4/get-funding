export default function TrustedBy() {
    const icons = [
        ["Forbes", "/images/logos/forbes.svg"],
        ["TechCrunch", "/images/logos/techcrunch.svg"],
        ["Wired", "/images/logos/wired.svg"],
        ["CNN", "/images/logos/cnn.svg", "hidden xl:block"],
        ["BBC", "/images/logos/bbc.svg"],
        ["CBS", "/images/logos/cbs.svg"],
        ["Fast Company", "/images/logos/fast-company.svg"],
        ["HuffPost", "/images/logos/huffpost.svg", "hidden xl:block"],
    ];

    return (
        <div className=" py-8 sm:py-12">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <h2 className="text-center text-xl sm:text-2xl font-semibold text-primaryblue">
                    Trusted by the world&#39;s most innovative teams
                </h2>
                <div className="flex flex-wrap justify-center items-center mt-6 gap-8 sm:gap-10 lg:gap-16">
                    {icons.map(([name, logo, className]) => (
                        <img
                            key={name}
                            alt={name}
                            src={logo}
                            className={`h-12 sm:h-14 w-auto object-contain ${className || ""}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}