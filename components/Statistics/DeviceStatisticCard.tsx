import { Badge, Box, Text } from "@chakra-ui/react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import Link from "next/link";

export function DeviceStatisticCard({ id, name, data, type, mac }) {
	return (
		<Box key={id} w="full" bg="white" rounded="lg" shadow="sm" p="4" mb="4">
			<Text color="gray.200" fontSize="xs">
				{mac}
			</Text>
			<Text mt="2" fontSize="2xl" color="gray.700" fontWeight="bold">
				{name} <Badge>{type}</Badge>
			</Text>
			<Box mt="2">
				<Text fontWeight="normal" fontSize="md" color="gray.400">
					Monthly usage:{" "}
					{data.reduce((a: any, b: any) => {
						return a + parseInt(b.volume);
					}, 0) + Math.floor(Math.random() * 10)}{" "}
					liters
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
						<XAxis dataKey="time" />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="volume"
							stroke="#8884d8"
							fillOpacity={1}
							fill="url(#colorLiters)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</Box>
			<Text mt="2" color="red.500" fontWeight="bold" fontSize="sm">
				Your water usage is 20% higher than avg.{" "}
			</Text>
			<Link href="/" passHref>
				<Text as="a" color="purple.400" fontSize="sm">
					How can i change that?
				</Text>
			</Link>
		</Box>
	);
}
