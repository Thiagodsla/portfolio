import {
  Box,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { DefaultCard } from '../components/DefaultCard';

interface Certificado {
  name: string; 
  imageUrl: string; 
  description: string; 
  link: string;
}

interface CertificadosCarrosselProps {
  certificados: Certificado[];
}

export function CertificadosCarrossel({ certificados }: CertificadosCarrosselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };



  const arrowSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box position="relative" w="100%" maxW="1000px" mx="auto" py={8}>
      {/* Carrossel */}
      <Box
        ref={scrollRef}
        overflowX="auto"
        display="flex"
        gap={4}
        px={8}
        scrollBehavior="smooth"
        css={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {certificados.map((cert, index) => (
          <Box
            key={index}
            minW="250px"
            flexShrink={0}
            p={8}
            borderWidth="1px"
            borderRadius="md"
            bg="white"
            scrollSnapAlign="center"
            boxShadow="md"
          >
            <DefaultCard
              key={index}
              name={cert.name}
              imageUrl={cert.imageUrl}
              description={cert.description}
              link={cert.link} 
              icons={[]}               
            />
          </Box>
        ))}
      </Box>

      {/* Setas laterais */}
      <IconButton
        icon={<FaChevronLeft />}
        aria-label="Scroll Left"
        onClick={() => scroll("left")}
        position="absolute"
        left="-50"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        size={arrowSize}
        colorScheme="teal"
        variant="ghost"
      />
      <IconButton
        icon={<FaChevronRight />}
        aria-label="Scroll Right"
        onClick={() => scroll("right")}
        position="absolute"
        right="-50"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        size={arrowSize}
        colorScheme="teal"
        variant="ghost"
      />
    </Box>
  );
}
