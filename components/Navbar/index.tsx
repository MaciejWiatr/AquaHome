import { Input } from "@chakra-ui/input";
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import useChakraBreakpoints from "../../src/hooks/useChakraBreakPoints";
import AquaHomeLogo from "../AquaHomeLogo";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
	const { isMd } = useChakraBreakpoints();

	return (
		<Flex
			alignItems="center"
			p="8"
			bgColor="purple.50"
			color="gray.600"
			gridGap="4"
			borderBottom="2px"
			borderColor="gray.200"
			gridArea="navbar"
		>
			{!isMd && <AquaHomeLogo />}
			<Text fontSize="xl" fontWeight="semibold">
				AquaHome
			</Text>
			<Input
				display={{ base: "none", md: "block" }}
				variant="filled"
				shadow="sm"
				bg="white"
				rounded="full"
				w="md"
				h="12"
				placeholder="Search"
			></Input>
			<Spacer />
			<NavbarLink url={"/"} name="Dashboard" />
			<NavbarLink url={"/statistics"} name="Statistics" />
			<NavbarLink url={"/shop"} name="Shop" />
		</Flex>
	);
};

export default Navbar;
