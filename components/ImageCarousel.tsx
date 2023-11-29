import { useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/slices/products";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  customClass?: string;
}

const ImageCarousel = ({ customClass }: Props) => {
  const { carousel } = useAppSelector(getProducts);

  return (
    <Carousel showThumbs={false} showStatus={false} className={customClass}>
      {carousel.map(({ thumbnails }, index) => (
        <Flex
          border="2px solid black"
          overflow="hidden"
          rounded="8px"
          key={index}
        >
          <Link href="/products/1">
            <Image
              w="100%"
              h="100%"
              objectFit="fill"
              src={thumbnails[0][6]}
              alt={`Slide ${index + 1}`}
            />
          </Link>
        </Flex>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
