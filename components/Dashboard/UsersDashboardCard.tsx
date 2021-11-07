import { Box, Flex } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import { ImDroplet } from "react-icons/im";
import { backendUrl } from "../../src/globals";
import useUserStore from "../../src/store/useUserStore";
import axios from "axios";

const UsersDashboardCard = () => {
	const { user } = useUserStore();
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		if (!user.household) {
			setUsers([]);
			return;
		}
		const resp = await axios.get(
			`${backendUrl}get/household/users?name=${user.household}`
		);
		const users = resp.data.data;
		setUsers(users);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<DashboardCard title="Users" area="users">
			<Box flexBasis="100%" h="full" maxH="full" overflowY="scroll">
				<Table h="20" variant="striped">
					<Thead position="sticky" top="0" bg="white">
						<Tr>
							<Th>Name</Th>
							<Th>
								<Flex alignItems="center" color="blue.400">
									<Text mr="1">Droplets</Text> <ImDroplet />
								</Flex>
							</Th>
						</Tr>
					</Thead>
					<Tbody overflow="hidden">
						{users.map(({ username, droplets }) => (
							<Tr key={Math.floor(Math.random())}>
								<Td>{username}</Td>
								<Td>{droplets}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</DashboardCard>
	);
};

export default UsersDashboardCard;
