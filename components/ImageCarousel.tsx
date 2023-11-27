import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageCarousel = () => {
  const images = [
    "url-to-image-1",
    "url-to-image-2",
    "url-to-image-3",
    "url-to-image-4",
    "url-to-image-5",
  ];

  return (
    <Carousel showThumbs={false} showStatus={false}>
      {images.map((image, index) => (
        <Flex
          key={index}
          border="2px solid black"
          h="164px"
          borderRadius="8px"
          overflow="hidden"
        >
          <Image
            src={
              "https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
            }
            alt={`Slide ${index + 1}`}
          />
        </Flex>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
