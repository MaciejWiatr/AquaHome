import Link from "next/link";
import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const NavbarLink = ({ url, name }) => {
	return (
		<Box display={{ base: "none", md: "block" }}>
			<Link href={url} passHref>
				<Button as="a" rounded="full">
					<Text cursor="pointer" fontWeight="semibold">
						{name}
					</Text>
				</Button>
			</Link>
		</Box>
	);
};

export default NavbarLink;
