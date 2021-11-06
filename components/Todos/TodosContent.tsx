import TodoCard from "./TodoCard";
import { Flex, Text } from "@chakra-ui/layout";

const TodosContent = () => {
	return (
		<Flex p="8" flexDir="column">
			<Text fontSize="2xl" fontWeight="semibold">
				Your tasks
			</Text>
			<Text color="gray.400">
				Laborum dolor adipisicing cupidatat aute.
			</Text>
			<TodoCard
				todoText="Wziąłem prysznic zamiast kąpieli"
				pointsAmout="50"
			/>
		</Flex>
	);
};

export default TodosContent;
