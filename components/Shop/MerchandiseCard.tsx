import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Divider, Flex, Text, Spacer } from "@chakra-ui/layout";
import { ImDroplet } from "react-icons/im";
import { usePointsStore } from "../../src/store/usePointsStore";

const MerchandiseCard = ({ productName, productImage, productPrice }) => {
	const { points } = usePointsStore();

	return (
		<Flex flexDir="column" rounded="lg" bg="white" shadow="sm" p="4">
			<Image
				src={productImage}
				alt={productName}
				height="70%"
				width="100%"
				objectFit="cover"
			/>
			<Divider mt="2" />
			<Spacer />
			<Flex flexDir="column">
				<Text mb="2" fontWeight="semibold">
					{productName}
				</Text>
				<Button
					colorScheme={points >= productPrice ? "purple" : "gray"}
				>
					{productPrice} <ImDroplet />
				</Button>
			</Flex>
		</Flex>
	);
};

export default MerchandiseCard;
