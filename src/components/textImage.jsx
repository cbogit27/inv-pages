import Image from "next/image";
import civic from "../../public/img/civic.jpg";
import Arrow from "./Arrow";

export default function TextImage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl px-2 py-16">
      {/* Text Section */}
      <div className="py-8 space-y-4">
        <div>
          <h1 className="text-xl lg:text-3xl font-bold mb-4">About the fund</h1>
          <h3 className="text-wrap text-sm lg:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut accusantium voluptas impedit iusto omnis maxime dolorum cupiditate
            culpa quas nulla repellendus beatae consequatur, laudantium optio ipsa! Laborum optio quidem sapiente, ratione ipsum consequuntur
            maxime non. Explicabo, ex fugiat maiores voluptate distinctio enim voluptatem? Rerum dolorum fugit dolorem maxime blanditiis
            natus!
          </h3>
        </div>
        <Arrow text="About Fund" />
        <Arrow text="Governance Model" />
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-end py-8">
        <div className="relative overflow-hidden h-72 lg:h-80 w-full ml-auto">
          <Image
            width={600}
            height={400}
            src={"https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="tree"
            priority={true}
            quality={50}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
