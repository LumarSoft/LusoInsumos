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

  return (
    <FramerComponent
      animationInitial={{ opacity: 0 }}
      animationAnimate={{ opacity: 1 }}
    >
      {/* Mostrar el banner de desktop si hay exactamente 1 */}
      {desktopBanners.length === 1 && (
        <div className="hidden lg:block">
          <Image
            src={desktopBanners[0].url}
            alt={desktopBanners[0].alt}
            height={300}
            width={1920}
          />
        </div>
      )}

      {/* Mostrar el banner de mobile si hay exactamente 1 */}
      {mobileBanners.length === 1 && (
        <div className="block lg:hidden">
          <Image
            src={mobileBanners[0].url}
            alt={mobileBanners[0].alt}
            height={300}
            width={1920}
          />
        </div>
      )}

      {/* Mostrar el carrusel de desktop si hay más de 1 */}
      {desktopBanners.length > 1 && (
        <Carousel className="hidden lg:flex">
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
      )}

      {/* Mostrar el carrusel de mobile si hay más de 1 */}
      {mobileBanners.length > 1 && (
        <Carousel className="flex lg:hidden">
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
      )}
    </FramerComponent>
  );
};
