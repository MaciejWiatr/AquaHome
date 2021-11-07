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
		date: "01.03",
		liters: "76",
	},
	{
		date: "02.03",
		liters: "45",
	},
	{
		date: "03.03",
		liters: "56",
	},
	{
		date: "04.03",
		liters: "87",
	},
	{
		date: "05.03",
		liters: "34",
	},
	{
		date: "06.03",
		liters: "67",
	},
	{
		date: "07.03",
		liters: "69",
	},
];

const StatsDashboardCard = () => {
	return (
		<DashboardCard title="Statistics" area="stats">
			<Text>Average daily water usage: 570L</Text>
			<ResponsiveContainer width="100%" height={250}>
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
					<CartesianGrid strokeDasharray="3 3" />
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
