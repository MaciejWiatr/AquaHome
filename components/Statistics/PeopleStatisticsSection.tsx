import { Box } from "@chakra-ui/react";
import React from "react";
import Masonry from "react-masonry-css";
import breakpointColumnsObj from "../../src/masonryBreakpoints";
import { PeopleStatisticCard } from "./PeopleStatisticCard";

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
	return (
		<Box h="full" w="full">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="masonry-grid"
			>
				{people.map(({ name, id, data }) => (
					<PeopleStatisticCard
						key={id}
						id={id}
						name={name}
						data={data}
					/>
				))}
			</Masonry>
		</Box>
	);
};

export default PeopleSection;
