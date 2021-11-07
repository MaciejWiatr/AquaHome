import { Box, Flex, Text } from "@chakra-ui/layout";

const DashboardCard = ({ area, title, children }) => {
	return (
		<Flex
			gridArea={area}
			w="full"
			maxW="full"
			rounded="lg"
			bg="white"
			shadow="sm"
			p="6"
			flexDir="column"
			h="full"
			maxH="full"
			overflowX="auto"
			overflowY={{ base: "initial", lg: "hidden" }}
			boxSizing="border-box"
		>
			<Flex w="full">
				<Text fontSize="lg" fontWeight="semibold" color="gray.700">
					{title}
				</Text>
			</Flex>
			{children}
		</Flex>
	);
};

export default DashboardCard;
