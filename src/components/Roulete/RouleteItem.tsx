import { Flex, Text, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";

interface RouleteItemProps {
  image: string;
  title: string;
  description: string;
}

export function RouleteItem({ image, title, description }: RouleteItemProps) {
  return (
    <Link href="/continent" passHref>
      <LinkChakra colorScheme="blackAlpha" color="white">
        <Flex
          backgroundImage={image}
          backgroundPosition="center"
          h="450px"
          bgRepeat="no-repeat"
          bgSize="cover"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Text
            as="h2"
            color="text.light"
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="72px"
          >
            {title}
          </Text>
          <Text
            color="info.light"
            fontSize="2xl"
            fontWeight="bold"
            mt="4"
            lineHeight="36px"
          >
            {description}
          </Text>
        </Flex>
      </LinkChakra>
    </Link>
  );
}
