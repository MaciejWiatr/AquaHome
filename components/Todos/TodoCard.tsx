import { Box, Flex, Text, Spacer, Checkbox } from "@chakra-ui/react";
import { ImDroplet } from "react-icons/im";
import confetti from "canvas-confetti";
import { usePointsStore } from "../../src/store/usePointsStore";
import { useRef } from "react";

const TodoCard = ({ todoText, pointsAmount }) => {
	const {
		increaseCompletedTodos,
		decreaseCompletedTodos,
		increasePoints,
		decreasePoints,
	} = usePointsStore();
	const checkBoxRef = useRef<any>();

	const onChange = (checked: boolean) => {
		confetti();
		if (checked) {
			increaseCompletedTodos(1);
			increasePoints(pointsAmount);
		} else {
			decreaseCompletedTodos(1);
			decreasePoints(pointsAmount);
		}
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
						<Text mr="0.5">{pointsAmount}</Text> <ImDroplet />
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
						onChange={(e) => onChange(e.target.checked)}
						ref={checkBoxRef}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default TodoCard;
