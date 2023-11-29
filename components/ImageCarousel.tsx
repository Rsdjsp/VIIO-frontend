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
      {carousel.map(({ thumbnails, product_id }, index) => (
        <Flex overflow="hidden" rounded="8px" key={index}>
          <Link
            href={`/products/${product_id}`}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              w="100%"
              h="100%"
              objectFit="scale-down"
              src={thumbnails[0][3]}
              alt={`Slide ${index + 1}`}
            />
          </Link>
        </Flex>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
