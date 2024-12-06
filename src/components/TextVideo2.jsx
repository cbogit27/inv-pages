import Arrow from "./Arrow";

export default function TextVideo2() {
  return (
    <section className="bg-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto max-w-7xl px-2 py-16">
        {/* Text Section */}
        <div className="py-8 space-y-8 order-last md:order-first">
          <div>
            <h1 className="text-xl md:text-3xl font-bold mb-4">Learn more about the influencers & stakeholders</h1>
            <h3 className="text-wrap text-sm md:text-lg font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut accusantium voluptas impedit iusto omnis maxime dolorum cupiditate
              culpa quas nulla repellendus beatae consequatur, laudantium optio ipsa! Laborum optio quidem sapiente, ratione ipsum
              consequuntur maxime non. Explicabo, ex fugiat maiores voluptate distinctio enim voluptatem? Rerum dolorum fugit dolorem maxime
              blanditiis natus!
            </h3>
          </div>
          
          <Arrow text="learn more" className="" />
        </div>

        {/* Video Section */}
        <div className="flex items-center justify-end py-8">
          <div className="relative overflow-hidden w-full h-48 md:h-[300px] ml-auto">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UeKWg0CGjxM?si=txs7Wo4HWtn7SXj7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
