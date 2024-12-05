import { FaGlobeAfrica } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import Arrow from "./Arrow";

export default function Display() {
    return (
        <section className="bg-slate-200">
            <div className="container mx-auto max-w-7xl px-4 py-16 space-y-16">
                {/* Section 1 */}
                <div>
                    <h3 className="mb-8 text-4xl font-semibold text-start">How fund is invested</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div>
                            <div className="border-l border-emerald-800 px-4">
                                <h1 className="text-2xl md:text-4xl font-semibold">Companies</h1>
                                <p className="font-bold text-lg">2345</p>
                            </div>
                            <p className="text-lg font-light mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid aspernatur placeat expedita ea numquam nisi cum. Odio dignissimos rem eveniet.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div>
                            <div className="border-l border-emerald-800 px-4">
                                <h1 className="text-2xl md:text-4xl font-semibold">Companies</h1>
                                <p className="font-bold text-lg">2345</p>
                            </div>
                            <p className="text-lg font-light mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid aspernatur placeat expedita ea numquam nisi cum. Odio dignissimos rem eveniet.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div>
                            <div className="border-l border-emerald-800 px-4">
                                <h1 className="text-2xl md:text-4xl font-semibold">Companies</h1>
                                <p className="font-bold text-lg">2345</p>
                            </div>
                            <p className="text-lg font-light mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid aspernatur placeat expedita ea numquam nisi cum. Odio dignissimos rem eveniet.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Card */}
                    <div className="bg-white py-16 px-8 space-y-8">
                        <div className="space-y-4 text-start">
                            <h1 className="text-lg lg:text-2xl font-semibold mb-4">Explore Open Investments</h1>
                            <p className="text-sm font-light">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse, tempore assumenda corporis optio explicabo neque minima placeat perferendis sunt modi cumque omnis libero labore?
                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <FaGlobeAfrica size={250} className="text-emerald-800/20" />
                        </div>
                        <div className="text-start">
                            <Arrow text="Explore Models" />
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="bg-white py-16 px-8 space-y-8">
                        <div className="space-y-4 text-start">
                            <h1 className="text-lg lg:text-2xl font-semibold mb-4">Accountability & Responsibility</h1>
                            <p className="text-sm font-light">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam laudantium quis cumque blanditiis ex porro nesciunt, dolores sint error quibusdam illo reiciendis ipsam nulla pariatur vel minima, vero consequatur voluptas.
                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <PiProjectorScreenChartFill size={250} className="text-emerald-800/20" />
                        </div>
                        <div className="text-start">
                            <Arrow text="Governance Model" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
