import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Divider, Flex, Text, Spacer } from "@chakra-ui/layout";
import { ImDroplet } from "react-icons/im";
import useUserStore from "../../src/store/useUserStore";

const MerchandiseCard = ({ productName, productImage, productPrice }) => {
	const { user } = useUserStore();

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
					colorScheme={user.droplets >= productPrice ? "purple" : "gray"}
				>
					{productPrice} <ImDroplet />
				</Button>
			</Flex>
		</Flex>
	);
};

export default MerchandiseCard;
