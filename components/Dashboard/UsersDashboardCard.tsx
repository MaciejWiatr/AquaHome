import { Box, Flex } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import React from "react";
import DashboardCard from "./DashboardCard";
import { ImDroplet } from "react-icons/im";

const users = [
	{ name: "Maciej", drops: 100 },
	{ name: "Kuba", drops: 200 },
	{ name: "Wiktor", drops: 300 },
	{ name: "Grzegorz", drops: 500 },
	{ name: "Stefan", drops: 600 },
	{ name: "Stefan", drops: 600 },
	{ name: "Stefan", drops: 600 },
];

const UsersDashboardCard = () => {
	return (
		<DashboardCard title="Users" area="users">
			<Box flexBasis="100%" h="full" maxH="full" overflowY="scroll">
				<Table h="20" variant="striped">
					<Thead position="sticky" top="0" bg="white">
						<Th>Name</Th>
						<Th>
							<Flex alignItems="center" color="blue.400">
								<Text mr="1">Droplets</Text> <ImDroplet />
							</Flex>
						</Th>
					</Thead>
					<Tbody overflow="hidden">
						{users.map(({ name, drops }) => (
							<Tr key={name}>
								<Td>{name}</Td>
								<Td>{drops}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</DashboardCard>
	);
};

export default UsersDashboardCard;
