export default function InvestmentHeroPage() {
    return (
        <section 
            className="bg-[url('https://i.ibb.co/BLpBRgh/lane.jpg')] bg-cover bg-center bg-no-repeat relative h-[300px] md:h-[350px] lg:h-[500px] flex items-end text-white"
            style={{ backgroundColor: '#333' }} // Fallback color
        >
            {/* Semi-transparent rectangle */}
            <div className="max-w-7xl container mx-auto px-4">
                <div className="bg-gray-300/70 p-6 md:p-8 lg:p-12 items-start w-[300px] md:w-[500px] lg:w-[600px] md:h-36 lg:h-56 mb-8">
                    <div className="space-y-2">
                        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide">
                            <span className="underline underline-offset-8">Resp</span>onsible Investments
                        </h2>
                        <p className="text-sm md:text-lg">
                            Home / Responsible Investment
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
