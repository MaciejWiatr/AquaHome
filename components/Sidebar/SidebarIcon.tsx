import { Flex } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import Link from "next/link";

const SidebarIcon = ({ icon, url = "", label = "" }) => {
	return (
		<Link href={url} passHref>
			<Tooltip label={label}>
				<Flex
					as="a"
					_hover={{ bgColor: "white" }}
					w="14"
					h="14"
					cursor="pointer"
					rounded="full"
					justifyContent="center"
					alignItems="center"
				>
					{icon}
				</Flex>
			</Tooltip>
		</Link>
	);
};

export default SidebarIcon;
