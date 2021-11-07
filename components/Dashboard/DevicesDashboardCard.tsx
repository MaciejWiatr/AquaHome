import DashboardCard from "./DashboardCard";
import { Table, Thead, Tbody, Tr, Th, Box } from "@chakra-ui/react";
import DeviceTableRow from "./DeviceTableRow";
import { useEffect, useState } from "react";
import { backendUrl } from "../../src/globals";
import axios from "axios";
import useUserStore from "../../src/store/useUserStore";

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
	const { user } = useUserStore();
	const [devices, setDevices] = useState([]);

	const fetchDevices = async () => {
		if (!user.household) {
			setDevices([]);
			return;
		}
		const resp = await axios.get(
			`${backendUrl}get/household/devices?name=${user.household}`
		);
		const devicesData = resp.data.data;
		console.log(devicesData);
		setDevices(devicesData);
	};

	useEffect(() => {
		fetchDevices();
	}, []);

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
						{devices.map(({ name, type, litersToday, _id }) => (
							<DeviceTableRow
								key={_id}
								name={name}
								type={type}
								litersToday={Math.floor(Math.random() * 30)}
							/>
						))}
					</Tbody>
				</Table>
			</Box>
		</DashboardCard>
	);
};

export default DevicesDashboardCard;
