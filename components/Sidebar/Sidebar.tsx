import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { BsBarChartFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
	return (
		<Flex
			borderRight="2px"
			borderColor="gray.300"
			p="2"
			bgColor="purple.50"
			flexDir="column"
			alignItems="center"
		>
			<Avatar
				mt="5"
				size="md"
				name="Maciej Wiatr"
				src="https://media-exp1.licdn.com/dms/image/C5603AQFPmrAmKI4LaA/profile-displayphoto-shrink_800_800/0/1571424514415?e=1641427200&v=beta&t=gIZXpwL-fylGPsXZtz5hh44QtWl26yoVSzKXeaJgNDo"
			/>
			<Spacer />
			<Flex flexDir="column" fontSize="2xl" gridGap="5" color="gray.400">
				<SidebarIcon label="Dashboard" icon={<RiLayoutMasonryFill />} />
				<SidebarIcon label="Satistics" icon={<BsBarChartFill />} />
				<SidebarIcon label="Coupons" icon={<IoTicket />} />
			</Flex>
			<Spacer />
		</Flex>
	);
};

export default Sidebar;
