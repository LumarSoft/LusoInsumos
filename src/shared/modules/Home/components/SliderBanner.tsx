import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FramerComponent } from "@/shared/components/Framer/FramerComponent";
import Image from "next/image";

export const SliderBanner = ({ banners }: { banners: any[] }) => {
  // En caso que no haya banners, no se muestra nada
  if (banners.length === 0) {
    return null;
  }

  // Filtrar los banners en categorías 'mobile' y 'desktop'
  const desktopBanners = banners.filter(
    (banner) => banner.category === "desktop"
  );
  const mobileBanners = banners.filter(
    (banner) => banner.category === "mobile"
  );

  //En caso que la cantidad de banners desktop sea 1
  if (desktopBanners.length === 1) {
    return (
      <FramerComponent
        animationInitial={{ opacity: 0 }}
        animationAnimate={{ opacity: 1 }}
        style="hidden lg:block"
      >
        <Image
          src={desktopBanners[0].url}
          alt={desktopBanners[0].alt}
          height={300}
          width={1920}
        />
      </FramerComponent>
    );
  }

  //En caso que la cantidad de banners mobile sea 1
  if (mobileBanners.length === 1) {
    return (
      <FramerComponent
        animationInitial={{ opacity: 0 }}
        animationAnimate={{ opacity: 1 }}
        style="block lg:hidden"
      >
        <Image
          src={mobileBanners[0].url}
          alt={mobileBanners[0].alt}
          height={300}
          width={1920}
        />
      </FramerComponent>
    );
  }

  // En caso que la cantidad de banners sea mayor a 1
  return (
    <FramerComponent
      animationInitial={{ opacity: 0 }}
      animationAnimate={{ opacity: 1 }}
    >
      <Carousel className={`hidden lg:flex`}>
        <CarouselContent>
          {desktopBanners.map((banner, index) => (
            <CarouselItem key={index}>
              <Image
                src={banner.url}
                alt={banner.alt}
                height={300}
                width={1920}
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel className={`flex lg:hidden`}>
        <CarouselContent>
          {mobileBanners.map((banner, index) => (
            <CarouselItem key={index}>
              <Image
                src={banner.url}
                alt={banner.alt}
                height={300}
                width={1920}
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </FramerComponent>
  );
};
