import { Box, Flex, Grid, Image, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Header } from "../components/Header";

export default function Continent() {
  return (
    <>
      <Header url="/" />
      <Flex
        backgroundImage="/europa.png"
        h="500px"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundPosition="center"
        px="36"
        py="16"
        align="flex-end"
      >
        <Text as="h1" fontSize="5xl" fontWeight="semibold" color="white">
          Europa
        </Text>
      </Flex>
      <Grid gap="16" templateColumns="1fr 1fr" mt="20" px="36">
        <Box>
          <Text textAlign="justify" fontSize="2xl">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex width="100%" align="center" justify="space-evenly">
          <Box>
            <Text
              as="h2"
              fontSize="5xl"
              fontWeight="600"
              color="highlight"
              textAlign="center"
            >
              50
            </Text>
            <Text fontSize="2xl" textAlign="center" fontWeight="600">
              países
            </Text>
          </Box>
          <Box>
            <Text
              as="h2"
              fontSize="5xl"
              fontWeight="600"
              color="highlight"
              textAlign="center"
            >
              60
            </Text>
            <Text fontSize="2xl" textAlign="center" fontWeight="600">
              línguas
            </Text>
          </Box>
          <Box>
            <Text
              as="h2"
              fontSize="5xl"
              fontWeight="600"
              color="highlight"
              textAlign="center"
            >
              27
            </Text>
            <Text fontSize="2xl" textAlign="center" fontWeight="600">
              cidades +100{" "}
              <Tooltip label="As 100 cidades mais bonitas." fontSize="md">
                <InfoOutlineIcon w={3} h={3} />
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Grid>
      <Box mt="20" px="36" pb="8">
        <Text as="h2" fontSize="4xl" fontWeight="medium">
          Cidades +100
        </Text>
        <Grid gap="45px" templateColumns="repeat(4, 256px)" mt="20">
          <Box>
            <Image src="/Foto-4.png" />
            <Flex
              p="6"
              bg="white"
              justify="space-between"
              align="center"
              borderBottomRadius="lg"
              borderBottomColor="highlight"
              borderLeftColor="highlight"
              borderRightColor="highlight"
              borderWidth="1px"
            >
              <Box>
                <Text as="h2" fontSize="xl" fontWeight="semibold">
                  Londres
                </Text>
                <Text fontWeight="medium" mt="3">
                  Reino Unido
                </Text>
              </Box>
              <Image src="/Ellipse 6-4.png" boxSize="30px" />
            </Flex>
          </Box>
          <Box>
            <Image src="/Foto-3.png" />
            <Flex
              p="6"
              bg="white"
              justify="space-between"
              align="center"
              borderBottomRadius="lg"
              borderBottomColor="highlight"
              borderLeftColor="highlight"
              borderRightColor="highlight"
              borderWidth="1px"
            >
              <Box>
                <Text as="h2" fontSize="xl" fontWeight="semibold">
                  Paris
                </Text>
                <Text fontWeight="medium" mt="3">
                  França
                </Text>
              </Box>
              <Image src="/Ellipse 6-3.png" boxSize="30px" />
            </Flex>
          </Box>
          <Box>
            <Image src="/Foto-2.png" />
            <Flex
              p="6"
              bg="white"
              justify="space-between"
              align="center"
              borderBottomRadius="lg"
              borderBottomColor="highlight"
              borderLeftColor="highlight"
              borderRightColor="highlight"
              borderWidth="1px"
            >
              <Box>
                <Text as="h2" fontSize="xl" fontWeight="semibold">
                  Roma
                </Text>
                <Text fontWeight="medium" mt="3">
                  Itália
                </Text>
              </Box>
              <Image src="/Ellipse 6-2.png" boxSize="30px" />
            </Flex>
          </Box>
          <Box>
            <Image src="/Foto-1.png" />
            <Flex
              p="6"
              bg="white"
              justify="space-between"
              align="center"
              borderBottomRadius="lg"
              borderBottomColor="highlight"
              borderLeftColor="highlight"
              borderRightColor="highlight"
              borderWidth="1px"
            >
              <Box>
                <Text as="h2" fontSize="xl" fontWeight="semibold">
                  Praga
                </Text>
                <Text fontWeight="medium" mt="3">
                  República Tcheca
                </Text>
              </Box>
              <Image src="/Ellipse 6-1.png" boxSize="30px" />
            </Flex>
          </Box>
          <Box>
            <Image src="/Foto.png" />
            <Flex
              p="6"
              bg="white"
              justify="space-between"
              align="center"
              borderBottomRadius="lg"
              borderBottomColor="highlight"
              borderLeftColor="highlight"
              borderRightColor="highlight"
              borderWidth="1px"
            >
              <Box>
                <Text as="h2" fontSize="xl" fontWeight="semibold">
                  Amsterdã
                </Text>
                <Text fontWeight="medium" mt="3">
                  Holanda
                </Text>
              </Box>
              <Image src="/Ellipse 6.png" boxSize="30px" />
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
