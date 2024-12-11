import { LiaPeopleCarrySolid } from "react-icons/lia";
import { LiaObjectGroupSolid } from "react-icons/lia";
import { IoMdAnalytics } from "react-icons/io";
import Arrow from "@/components/Arrow";

export default function InvestmentCard() {
    return (
        <section className="container max-w-7xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                {/* Card 1 */}
                <div className="flex flex-col items-center text-start space-y-8 p-6">
                    <div className="flex items-center justify-center">
                        <LiaPeopleCarrySolid size={150} className="text-emerald-800" />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg md:text-xl font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h4>
                        <p className="text-sm md:text-base font-light">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
                            corporis, eius possimus dolorem impedit natus labore laudantium quos
                            ipsum eveniet quia ab cumque quidem corrupti?
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Arrow text="More expectations" />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-start space-y-8 p-6">
                    <div className="flex items-center justify-center">
                        <LiaObjectGroupSolid size={150} className="text-emerald-800" />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg md:text-xl font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h4>
                        <p className="text-sm md:text-base font-light">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
                            corporis, eius possimus dolorem impedit natus labore laudantium quos
                            ipsum eveniet quia ab cumque quidem corrupti?
                        </p>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <Arrow text="More expectations" />
                        <Arrow text="More expectations" />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-start space-y-8 p-6">
                    <div className="flex items-center justify-center">
                        <IoMdAnalytics size={150} className="text-emerald-800" />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg md:text-xl font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h4>
                        <p className="text-sm md:text-base font-light">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
                            corporis, eius possimus dolorem impedit natus labore laudantium quos
                            ipsum eveniet quia ab cumque quidem corrupti?
                        </p>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <Arrow text="More expectations" />
                        <Arrow text="More expectations" />
                    </div>
                </div>
            </div>
        </section>
    );
}
