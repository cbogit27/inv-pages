import Arrow from "./Arrow";

export default function History() {
    return (
        <section className="container mx-auto max-w-7xl px-2 py-16 space-y-8">
            <h1 className="text-2xl font-semibold">The History</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center lg:justify-between gap-y-8 gap-x-8 lg:gap-x-32 py-16">
                {/* First Circle */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center rounded-full border border-emerald-700">
                        <h1 className="text-4xl font-semibold">1960</h1>
                    </div>
                    <h3 className="text-center text-sm">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                {/* Second Circle */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center rounded-full border border-emerald-700">
                        <h1 className="text-4xl font-semibold">1990</h1>
                    </div>
                    <h3 className="text-center text-sm">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                {/* Third Circle */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center rounded-full border border-emerald-700">
                        <h1 className="text-4xl font-semibold">2010</h1>
                    </div>
                    <h3 className="text-center text-sm">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                {/* Fourth Circle */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center rounded-full border border-emerald-700">
                        <h1 className="text-4xl font-semibold">2030</h1>
                    </div>
                    <h3 className="text-center text-sm">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div>
            <Arrow text="Check history"/>
            </div>
        </section>
    );
}
