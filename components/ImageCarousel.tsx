import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  customClass?: string;
  parameters?: any;
}

const ImageCarousel = ({ customClass, parameters }: Props) => {
  const images = [
    "url-to-image-1",
    "url-to-image-2",
    "url-to-image-3",
    "url-to-image-4",
    "url-to-image-5",
  ];

  return (
    <Carousel showThumbs={false} showStatus={false} className={customClass}>
      {images.map((image, index) => (
        <Flex style={parameters} key={index}>
          <Link href="/products/1">
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              src={
                "https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
              }
              alt={`Slide ${index + 1}`}
            />
          </Link>
        </Flex>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
