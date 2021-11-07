import { DeviceStatisticCard } from "./DeviceStatisticCard";
import { Box } from "@chakra-ui/layout";
import Masonry from "react-masonry-css";
import breakpointColumnsObj from "../../src/masonryBreakpoints";
import useUserStore from "../../src/store/useUserStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../src/globals";

const DevicesSection = () => {
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
		let devicesData = resp.data.data;
		setDevices(devicesData);
	};

	useEffect(() => {
		fetchDevices();
	}, []);

	return (
		<Box h="full" w="full">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="masonry-grid"
			>
				{devices.map(({ name, _id, water_data, type, mac }) => (
					<DeviceStatisticCard
						mac={mac}
						key={_id}
						id={_id}
						type={type}
						name={name}
						data={water_data}
					/>
				))}
			</Masonry>
		</Box>
	);
};

export default DevicesSection;
