import { DeviceStatisticCard } from "./DeviceStatisticCard";
import { Box } from "@chakra-ui/layout";
import Masonry from "react-masonry-css";
import breakpointColumnsObj from "../../src/masonryBreakpoints";

const devices = [
	{
		name: "Kran w łazience",
		id: "5b66fb7a-3f40-11ec-9bbc-0242ac130002",
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

const DevicesSection = () => {
	return (
		<Box h="full" w="full">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="masonry-grid"
			>
				{devices.map(({ name, id, data }) => (
					<DeviceStatisticCard
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

export default DevicesSection;
