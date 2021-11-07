import DashboardCard from "./DashboardCard";
import { Table, Thead, Tbody, Tr, Th, Box } from "@chakra-ui/react";
import DeviceTableRow from "./DeviceTableRow";

const mockDevices = [
	{ name: "Kran w kuchni", type: "tap", litersToday: 12 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Kran w kuchni", type: "tap", litersToday: 12 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
	{ name: "Pralka", type: "washing machine", litersToday: 15 },
	{ name: "Zmywarka", type: "dishwasher", litersToday: 24 },
];

const DevicesDashboardCard = () => {
	return (
		<DashboardCard title="Devices" area="devices">
			<Box h="full" w="full" overflowY="scroll">
				<Table overflow="scroll" variant="striped">
					<Thead position="sticky" top="0" bg="white">
						<Tr>
							<Th>Name</Th>
							<Th>Type</Th>
							<Th isNumeric>Water used today</Th>
						</Tr>
					</Thead>
					<Tbody>
						{mockDevices.map(({ name, type, litersToday }) => (
							<DeviceTableRow
								key={Math.random()}
								name={name}
								type={type}
								litersToday={litersToday}
							/>
						))}
					</Tbody>
				</Table>
			</Box>
		</DashboardCard>
	);
};

export default DevicesDashboardCard;
