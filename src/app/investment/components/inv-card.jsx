import { LiaPeopleCarrySolid } from "react-icons/lia";
import { LiaObjectGroupSolid } from "react-icons/lia";
import { IoMdAnalytics } from "react-icons/io";
import Arrow from "@/components/Arrow";


export default function InvestmentCard(){
    return (
        <section className="container max-w-7xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                <div className="flex flex-col space-y-8 p-4">
                    <div><LiaPeopleCarrySolid size={250} className="text-emerald-800"/></div>
                    <div className="space-y-4 px-4">
                        <h4 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h4>
                        <p className="text-sm font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita corporis, eius possimus dolorem impedit natus labore laudantium quos ipsum eveniet quia ab cumque quidem corrupti?</p>
                    </div>
                    <div><Arrow text="More expectations"/></div>
                </div>
                <div className="flex flex-col space-y-8 p-4">
                    <div><LiaObjectGroupSolid size={250} className="text-emerald-800"/></div>
                    <div className="space-y-4 px-4">
                        <h4 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h4>
                        <p className="text-sm font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita corporis, eius possimus dolorem impedit natus labore laudantium quos ipsum eveniet quia ab cumque quidem corrupti?</p>
                    </div>
                    <div className="space-y-2">
                    <Arrow text="More expectations"/>
                    <Arrow text="More expectations"/>
                    </div>
                </div>
                <div className="flex flex-col space-y-8 p-4">
                    <div><IoMdAnalytics size={250} className="text-emerald-800"/></div>
                    <div className="space-y-4 px-4">
                        <h4 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h4>
                        <p className="text-sm font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita corporis, eius possimus dolorem impedit natus labore laudantium quos ipsum eveniet quia ab cumque quidem corrupti?</p>
                    </div>
                    <div className="space-y-2">
                    <Arrow text="More expectations"/>
                    <Arrow text="More expectations"/>
                    </div>
                </div>
            </div>
        </section>
    )
}