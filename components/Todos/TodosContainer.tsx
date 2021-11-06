import { Box, Flex, Spacer } from "@chakra-ui/layout";
import TodosContent from "./TodosContent";

const TodosContainer = () => {
	return (
		<Box
			display={{ base: "none", xl: "block" }}
			gridArea="todos"
			bgColor="purple.50"
			borderLeft="2px"
			borderColor="gray.200"
			h="full"
		>
			<TodosContent />
		</Box>
	);
};

export default TodosContainer;
