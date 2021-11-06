import TodoCard from "./TodoCard";
import { Flex, Text, Spacer } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/react";
import { usePointsStore } from "../../src/store/usePointsStore";

const TodosContent = () => {
	const { completedTodos, points } = usePointsStore();

	return (
		<Flex p="8" pt="6" flexDir="column" h="full">
			<Text fontSize="2xl" fontWeight="semibold">
				Your tasks
			</Text>
			<Text color="gray.400">
				Laborum dolor adipisicing cupidatat aute.
			</Text>
			<Flex flexDir="column" mt="2">
				<TodoCard
					todoText="Wziąłem prysznic zamiast kąpieli"
					pointsAmout={20}
				/>
			</Flex>
			<Spacer />
			<Flex
				w="full"
				rounded="lg"
				bg="white"
				shadow="sm"
				p="4"
				flexDir="column"
			>
				<Text fontSize="md" fontWeight="semibold">
					Your progress:
				</Text>
				<Text>{completedTodos} completed tasks</Text>
				<Text color="purple.400" mb="2">
					{100 - points} points to next level
				</Text>
				<Progress
					colorScheme="purple"
					hasStripe
					w="full"
					value={points}
					rounded="full"
					isAnimated
				/>
			</Flex>
		</Flex>
	);
};

export default TodosContent;
