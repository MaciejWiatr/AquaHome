import TodoCard from "./TodoCard";
import { Flex, Text, Spacer } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/react";
import useUserStore from "../../src/store/useUserStore";
import { useMemo } from "react";

const todos = [
	{
		todoText: "Wziąłem przysznic zamiast kąpieli",
		pointsAmount: 20,
	},
	{
		todoText: "Nastawiłem pełną pralkę",
		pointsAmount: 50,
	},
	{
		todoText: "Zakręciłem kran po umyciu zębów",
		pointsAmount: 10,
	},
];

const TodosContent = () => {
	const { user } = useUserStore();

	const maxPoints = useMemo(() => {
		let points = 0;
		user.active_tasks.forEach(({ reward }) => {
			points += reward;
		});
		return points;
	}, [user]);

	return (
		<Flex p="8" pt="6" flexDir="column" h="full">
			<Text fontSize="2xl" fontWeight="semibold">
				Your tasks
			</Text>
			<Text color="gray.400">
				Laborum dolor adipisicing cupidatat aute.
			</Text>
			<Flex flexDir="column" mt="2">
				{user.active_tasks.map(({ name, type, reward, completed }) => (
					<TodoCard
						key={type}
						todoText={name}
						pointsAmount={reward}
						completed={completed}
						type={type}
					/>
				))}
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
				<Text>
					{
						user.active_tasks.filter(
							({ completed }) => completed === true
						).length
					}{" "}
					completed tasks
				</Text>
				<Text color="purple.400" mb="2">
					{maxPoints - user.droplets} points to go
				</Text>
				<Progress
					colorScheme="purple"
					hasStripe
					w="full"
					value={user.droplets}
					max={maxPoints}
					rounded="full"
					isAnimated
				/>
			</Flex>
		</Flex>
	);
};

export default TodosContent;
