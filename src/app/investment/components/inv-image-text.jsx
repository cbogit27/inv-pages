import Image from "next/image";

export default function InvestmentTextImage(){
    return (
        <section className="py-16 container max-w-7xl mx-auto space-y-16">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 order-last md:order-first">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-base font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae libero dicta maxime quidem, ut nulla at, eaque a eveniet aut neque consectetur? At esse quae dicta quaerat laboriosam ad magnam soluta ea, odio ut quam, deserunt obcaecati perspiciatis tenetur asperiores iste consectetur quo necessitatibus dolorum id. Magni, molestias, error porro eos suscipit saepe reiciendis quasi cupiditate optio similique adipisci excepturi perspiciatis cum quod voluptatum autem facere! Vitae, rem sequi. Et beatae rerum reprehenderit, explicabo laborum nisi eaque possimus itaque natus, autem illum debitis. Consectetur, laudantium.</p>
                </div>

                <div className="flex items-center justify-end py-8">
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

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-base font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae libero dicta maxime quidem, ut nulla at, eaque a eveniet aut neque consectetur? At esse quae dicta quaerat laboriosam ad magnam soluta ea, odio ut quam, deserunt obcaecati perspiciatis tenetur asperiores iste consectetur quo necessitatibus dolorum id. Magni, molestias, error porro eos suscipit saepe reiciendis quasi cupiditate optio similique adipisci excepturi perspiciatis cum quod voluptatum autem facere! Vitae, rem sequi. Et beatae rerum reprehenderit, explicabo laborum nisi eaque possimus itaque natus, autem illum debitis. Consectetur, laudantium.</p>
                </div>

                <div className="flex items-center justify-end py-8 ">
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