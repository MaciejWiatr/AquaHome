import { Box, Text, Flex } from "@chakra-ui/react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import { ImDroplet } from "react-icons/im";

export function PeopleStatisticCard({ id, name, data }) {
	return (
		<Box key={id} w="full" bg="white" rounded="lg" shadow="sm" p="4" mb="4">
			<Text color="gray.200" fontSize="xs">
				{id}
			</Text>
			<Text mt="2" fontSize="2xl" color="gray.700" fontWeight="bold">
				{name}
			</Text>
			<Box mt="2">
				<Text fontWeight="normal" fontSize="md" color="blue.400">
					<Flex alignItems="center">
						<Text mr="1">
							Total droplets:{" "}
							{data.reduce((a: any, b: any) => {
								return a + parseInt(b.liters);
							}, 0)}{" "}
						</Text>
						<ImDroplet />
					</Flex>
				</Text>
			</Box>
			<Box fontSize="sm" w="full">
				<ResponsiveContainer width="100%" height={200}>
					<AreaChart
						width={500}
						height={400}
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
						<CartesianGrid strokeDasharray="3 3" />
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
			</Box>
		</Box>
	);
}
