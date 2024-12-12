import Arrow from "@/components/Arrow";
import Image from "next/image";

export default function InvestmentTextImage(){
    return (
        <section className="container max-w-7xl mx-auto space-y-16">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4">
                <div className="space-y-2 md:space-y-4 order-last md:order-first">
                    <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-base font-light">perspiciatis cum quod voluptatum autem facere! Vitae, rem sequi. Et beatae rerum reprehenderit, explicabo laborum nisi eaque possimus itaque natus, autem illum debitis. Consectetur, laudantium.</p>
                    <Arrow text={"get the overview"}/> 
                </div>

                <div className="flex items-center justify-end">
        <div className="relative overflow-hidden h-72 lg:h-80 w-full ml-auto">
          <Image
            width={600}
            height={400}
            src={"https://i.ibb.co/3zsFSXb/pool.jpg"}
            alt="tree"
            priority={true}
            quality={50}
            className="object-cover"
          />
        </div>
      </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4">
                <div className="space-y-2 md:space-y-4 order-last md:order-first">
                    <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-base font-light">facere! Vitae, rem sequi. Et beatae rerum reprehenderit, explicabo laborum nisi eaque possimus itaque natus, autem illum debitis. Consectetur, laudantium.</p>
                    <Arrow text={"get the overview"}/> 
                    <Arrow text={"get the overview"}/>               
                </div>

                <div className="flex items-center justify-end">
        <div className="relative overflow-hidden h-72 lg:h-80 w-full ml-auto">
          <Image
            width={600}
            height={400}
            src={"https://i.ibb.co/V2jZvDL/transformation.jpg"}
            alt="tree"
            priority={true}
            quality={50}
            className="object-cover"
          />
        </div>
      </div>
            </section>
        </section>
    )
}