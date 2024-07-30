"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardProduct } from "@/shared/components/CardProducts/CardProducts";
import { FramerComponent } from "@/shared/components/Framer/FramerComponent";
import { ProductType } from "@/shared/type/ProductTypes";
import Autoplay from "embla-carousel-autoplay";

export const SliderProductsComponent = ({
  items,
}: {
  items: ProductType[];
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };
  return (
    <FramerComponent
      style="w-full"
      animationVariants={container}
      animationInitial="hidden"
      animationWhileInView="show"
      animationViewPort={{ once: true, offset: 0.4 }}
    >


      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 2xl:basis-1/4 w-full"
            >
              <CardProduct product={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </FramerComponent>
  );
};
