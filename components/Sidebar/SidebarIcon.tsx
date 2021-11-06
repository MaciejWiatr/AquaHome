import { Flex } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import Link from "next/link";

const SidebarIcon = ({ icon, url = "", label = "" }) => {
	return (
		<Link href={url} passHref>
			<Tooltip label={label}>
				<Flex
					as="a"
					_hover={{ bgColor: "white", color: "purple.500" }}
					w="14"
					h="14"
					cursor="pointer"
					rounded="full"
					justifyContent="center"
					alignItems="center"
					transition="all 0.25s ease"
				>
					{icon}
				</Flex>
			</Tooltip>
		</Link>
	);
};

export default SidebarIcon;
