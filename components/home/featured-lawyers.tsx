import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featured: { img: string; desc: string }[] = [
  {
    img: "/images/lawyer-1.jpeg",
    desc: "I was impressed with Mr. Patel’s attention to detail. He meticulously reviewed all documents and left no stone unturned. His thoroughness and precision helped secure a positive outcome for my case.",
  },
  {
    img: "/images/lawyer-1.jpeg",
    desc: "I was impressed with Mr. Patel’s attention to detail. He meticulously reviewed all documents and left no stone unturned. His thoroughness and precision helped secure a positive outcome for my case.",
  },
  {
    img: "/images/lawyer-1.jpeg",
    desc: "I was impressed with Mr. Patel’s attention to detail. He meticulously reviewed all documents and left no stone unturned. His thoroughness and precision helped secure a positive outcome for my case.",
  },
  {
    img: "/images/lawyer-1.jpeg",
    desc: "I was impressed with Mr. Patel’s attention to detail. He meticulously reviewed all documents and left no stone unturned. His thoroughness and precision helped secure a positive outcome for my case.",
  },
  {
    img: "/images/lawyer-1.jpeg",
    desc: "I was impressed with Mr. Patel’s attention to detail. He meticulously reviewed all documents and left no stone unturned. His thoroughness and precision helped secure a positive outcome for my case.",
  },
  {
    img: "/images/lawyer-1.jpeg",
    desc: "I was impressed with Mr. Patel’s attention to detail. He meticulously reviewed all documents and left no stone unturned. His thoroughness and precision helped secure a positive outcome for my case.",
  },
];

function FeaturedLawyers(): React.JSX.Element {
  return (
    <div className="py-5 px-5 mb-10">
      <div className="w-full max-w-[1184px] mx-auto">
        <h1 className="font-lilita text-primary-blue48 text-[2.5em] text-center">
          OUR FEATURED LAWYERS
        </h1>
        <h6 className="text-primary-dark1E font-extralight italic mb-8 text-center">
          The most frequently searched and the most popular Lawyers on the
          platform
        </h6>
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featured.map((feature, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4 lg:pl-7"
              >
                <div
                  key={index}
                  className="relative z-0 h-[508px] rounded-[20px]  bg-center bg-no-repeat bg-cover overflow-hidden"
                  style={{ backgroundImage: `url(${feature.img})` }}
                >
                  <div className="absolute z-[1] bottom-0 bg-black/55 py-6 px-5 text-white text-sm font-medium rounded-t-[20px]">
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedLawyers;