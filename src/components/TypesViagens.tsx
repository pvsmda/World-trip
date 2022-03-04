import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesProps {
  name: string;
  url_image: string;
}

export function TypesViagens({ name, url_image }: TravelTypesProps) {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      align="center"
      justify="space-between"
      h="145px"
    >
      <Image src={url_image} boxSize="85px" />
      <Text fontSize="2xl" fontWeight="bold" lineHeight="36px">
        {name}
      </Text>
    </Flex>
  );
}
