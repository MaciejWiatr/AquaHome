import { Box, Flex, Text, Spacer, Checkbox } from "@chakra-ui/react";
import { ImDroplet } from "react-icons/im";
import confetti from "canvas-confetti";

const TodoCard = ({ todoText, pointsAmout }) => {
	const onChange = () => {
		confetti();
	};

	return (
		<Flex h="full" mt="2">
			<Flex
				flexDir="row"
				w="full"
				rounded="lg"
				bg="white"
				shadow="sm"
				p="4"
			>
				<Box w="90%">
					<Text>{todoText}</Text>
					<Flex
						mt="2"
						alignItems="center"
						fontSize="sm"
						color="blue.300"
					>
						<Text mr="0.5">{pointsAmout}</Text> <ImDroplet />
					</Flex>
				</Box>
				<Spacer />
				<Flex
					color="gray.500"
					h="full"
					alignItems="center"
					justifyContent="center"
				>
					<Checkbox
						colorScheme="purple"
						size="lg"
						rounded="full"
						onInput={onChange}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default TodoCard;
