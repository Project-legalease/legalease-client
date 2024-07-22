"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <div className="py-5 px-5 mb-10">
      <div className="w-full max-w-6xl mx-auto">
        <h1
          className={cn(
            "font-lilita text-primary-blue48 text-3xl sm:text-[2.5em]",
            pathname.startsWith("/lawyers/find") ? "pl-5" : "text-center"
          )}
        >
          OUR FEATURED LAWYERS
        </h1>
        <h6
          className={cn(
            "text-primary-dark1E font-extralight font-sm sm:font-base italic mb-8",
            pathname.startsWith("/lawyers/find") ? "pl-5" : "text-center"
          )}
        >
          The most frequently searched and the most popular Lawyers on the
          platform
        </h6>
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="w-4/5 mx-auto"
        >
          <CarouselContent>
            {featured.map((feature, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "md:basis-1/2 pl-4 lg:pl-7",
                  pathname.startsWith("/lawyers/find")
                    ? "lg:basis-1/2"
                    : "lg:basis-1/3"
                )}
              >
                <div
                  key={index}
                  className="relative z-0 h-[508px] rounded-[20px]  bg-center bg-no-repeat bg-cover overflow-hidden"
                  style={{ backgroundImage: `url(${feature.img})` }}
                >
                  <div className="absolute z-[1] bottom-0 left-0 right-0 bg-black/55 py-6 px-5 text-white text-sm font-medium rounded-t-[20px]">
                    {pathname.startsWith("/lawyers/find") ? (
                      <button className="w-full px-4 py-4 bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61 font-medium rounded-lg duration-300">
                        View Profile
                      </button>
                    ) : (
                      <p>{feature.desc}</p>
                    )}
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
