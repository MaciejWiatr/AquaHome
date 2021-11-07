import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { backendUrl } from "../../src/globals";
import breakpointColumnsObj from "../../src/masonryBreakpoints";
import useUserStore from "../../src/store/useUserStore";
import { PeopleStatisticCard } from "./PeopleStatisticCard";

const generateRandomUserData = () => {
	return new Array(10).fill(1).map((value, index) => ({
		date: `day ${index}`,
		droplets: Math.floor(index * Math.random() * 2 + index),
	}));
};

const people = [
	{
		name: "Maciej Wiatr",
		id: "2345",
		data: [
			{
				date: "1",
				liters: "76",
			},
			{
				date: "2",
				liters: "45",
			},
			{
				date: "3",
				liters: "56",
			},
			{
				date: "4",
				liters: "87",
			},
			{
				date: "5",
				liters: "34",
			},
			{
				date: "6",
				liters: "67",
			},
			{
				date: "7",
				liters: "69",
			},
			{
				date: "8",
				liters: "70",
			},
			{
				date: "9",
				liters: "89",
			},
			{
				date: "10",
				liters: "21",
			},
		],
	},
];

const PeopleSection = () => {
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
		<Box h="full" w="full">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="masonry-grid"
			>
				{users.map(({ username, droplets, id }) => (
					<PeopleStatisticCard
						key={id}
						id={id}
						name={username}
						droplets={droplets}
						data={generateRandomUserData()}
					/>
				))}
			</Masonry>
		</Box>
	);
};

export default PeopleSection;
