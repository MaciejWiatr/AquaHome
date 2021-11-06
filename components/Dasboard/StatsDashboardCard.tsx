import { Text } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";
import {
	AreaChart,
	ResponsiveContainer,
	XAxis,
	CartesianGrid,
	Tooltip,
	Area,
} from "recharts";

const data = [
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
];

const StatsDashboardCard = () => {
	return (
		<DashboardCard title="Statistics" area="stats">
			<Text>Average daily water usage: 570L</Text>
			<ResponsiveContainer width="100%" height={280}>
				<AreaChart
					data={data}
					margin={{
						top: 10,
						left: 0,
						bottom: 0,
					}}
				>
					<defs>
						<linearGradient
							id="colorLiters"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#8884d8"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="#8884d8"
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<XAxis dataKey="date" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="liters"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#colorLiters)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</DashboardCard>
	);
};

export default StatsDashboardCard;
