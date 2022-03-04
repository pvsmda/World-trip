import { Flex, Image, Link as LinkChakra } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface HeaderProps {
  url?: string;
}

export function Header({ url = "" }: HeaderProps) {
  return (
    <Flex as="header" bg="white" align="center" justify="center" py="7" px="36">
      <Flex align="center" justify="center" w="100%">
        {!!url && (
          <Flex flexGrow="1">
            <Link href={url} passHref>
              <LinkChakra>
                <Flex>
                  <ChevronLeftIcon w={8} h={8} />
                </Flex>
              </LinkChakra>
            </Link>
          </Flex>
        )}

        <Flex flexGrow="1" justify={!url ? "center" : ""}>
          <Image src="/surf.svg" alt="logo" />
        </Flex>
      </Flex>
    </Flex>
  );
}
