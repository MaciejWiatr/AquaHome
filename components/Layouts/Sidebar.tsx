import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import { RiLayoutMasonryFill } from "react-icons/ri";

const Sidebar = () => {
	return (
		<Flex p="2" bg="tomato" flexDir="column" alignItems="center">
			<Avatar
				mt="5"
				size="md"
				name="Maciej Wiatr"
				src="https://media-exp1.licdn.com/dms/image/C5603AQFPmrAmKI4LaA/profile-displayphoto-shrink_800_800/0/1571424514415?e=1641427200&v=beta&t=gIZXpwL-fylGPsXZtz5hh44QtWl26yoVSzKXeaJgNDo"
			/>
			<Spacer />
			<Flex flexDir="column">
				<RiLayoutMasonryFill />
			</Flex>
			<Spacer />
		</Flex>
	);
};

export default Sidebar;
