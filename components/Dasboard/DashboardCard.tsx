import { Box, Flex, Text } from "@chakra-ui/layout";

const DashboardCard = ({ area, title, children }) => {
	return (
		<Flex
			gridArea={area}
			w="full"
			h="100%"
			rounded="lg"
			bg="white"
			shadow="sm"
			p="6"
			flexDir="column"
			maxH="full"
			overflow="hidden"
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
