import { Td, Tr, Badge } from "@chakra-ui/react";
import Link from "next/link";

const DeviceTableRow = ({ name, type, litersToday }) => {
	return (
		<Tr>
			<Td>
				<Link href={`/devices#${name}`}>{name}</Link>
			</Td>
			<Td>
				<Badge colorScheme="purple">{type}</Badge>
			</Td>
			<Td isNumeric>{litersToday}</Td>
		</Tr>
	);
};

export default DeviceTableRow;
