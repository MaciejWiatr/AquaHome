import { Box, Flex, Text, Spacer, Checkbox } from "@chakra-ui/react";
import { ImDroplet } from "react-icons/im";
import confetti from "canvas-confetti";
import { usePointsStore } from "../../src/store/usePointsStore";
import { useRef } from "react";
import useUserStore from "../../src/store/useUserStore";

const TodoCard = ({ todoText, pointsAmount, completed, type }) => {
	const { toggleTask } = useUserStore();
	const checkBoxRef = useRef<any>();

	console.log(completed);

	const onChange = async (checked: boolean) => {
		confetti();
		await toggleTask(type);
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
						isChecked={completed}
						onChange={(e) => onChange(e.target.checked)}
						ref={checkBoxRef}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default TodoCard;
