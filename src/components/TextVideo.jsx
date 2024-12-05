export default function TextVideo() {
    return (
      <section className="container mx-auto max-w-7xl px-4 py-16 space-y-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-2xl font-semibold tracking-wider">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!
          </h2>
          <div className="w-full">
            <p className="text-sm md:text-lg font-light text-wrap tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex culpa fugiat cum in ducimus ut architecto perferendis, nisi
              delectus enim, laudantium soluta explicabo harum perspiciatis dignissimos placeat error quo at quasi fugit! Dignissimos sapiente
              odit distinctio enim harum! Harum iure nisi quod voluptate facere tenetur eaque odio delectus velit.
            </p>
          </div>
        </div>
  
        {/* Video Section */}
        <div className="relative w-full h-48 md:h-[600px] py-8">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/iOv2AO55_G8?si=GxZ8PHb-W0VNKtBX"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Spacer for new section */}
        <div className="py-16"></div>
      </section>
    );
  }
  