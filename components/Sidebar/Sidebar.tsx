import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { BsBarChartFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import SidebarIcon from "./SidebarIcon";
import AquaHomeLogo from "../AquaHomeLogo";
import useChakraBreakpoints from "../../src/hooks/useChakraBreakPoints";
import { Button } from "@chakra-ui/button";
import { MdTaskAlt } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/hooks";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import TodosContent from "../Todos/TodosContent";

const Sidebar = () => {
	const { isLg } = useChakraBreakpoints();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex
			borderRight={{ base: "0px", lg: "2px" }}
			borderTop={{ base: "2px", lg: "0px" }}
			borderColor={{ base: "gray.200", lg: "gray.200" }}
			p="2"
			pt="6"
			pb="6"
			pl={{ base: "5", lg: 0 }}
			pr={{ base: "5", lg: 0 }}
			bgColor="purple.50"
			flexDir={{ lg: "column", base: "row" }}
			alignItems="center"
			gridArea="sidebar"
		>
			<Menu>
				<MenuButton>
					<Avatar
						size="md"
						name="Maciej Wiatr"
						src="https://media-exp1.licdn.com/dms/image/C5603AQFPmrAmKI4LaA/profile-displayphoto-shrink_800_800/0/1571424514415?e=1641427200&v=beta&t=gIZXpwL-fylGPsXZtz5hh44QtWl26yoVSzKXeaJgNDo"
					/>
				</MenuButton>
				<MenuList border="none" shadow="md">
					<MenuItem>Settings</MenuItem>
					<MenuItem>Manage users</MenuItem>
					<MenuItem color="red.500">Logout</MenuItem>
				</MenuList>
			</Menu>
			<Spacer />
			<Flex
				flexDir={{ lg: "column", base: "row" }}
				fontSize="2xl"
				gridGap="5"
				color="gray.400"
			>
				<SidebarIcon label="Dashboard" icon={<RiLayoutMasonryFill />} />
				<SidebarIcon label="Statistics" icon={<BsBarChartFill />} />
				<SidebarIcon label="Coupons" icon={<IoTicket />} />
			</Flex>
			<Spacer />
			<Box>
				{isLg ? (
					<AquaHomeLogo />
				) : (
					<Button
						rounded="full"
						colorScheme="purple"
						h="12"
						w="12"
						onClick={onOpen}
					>
						<MdTaskAlt />
					</Button>
				)}
			</Box>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent bgColor="purple.50">
					<DrawerCloseButton />
					<TodosContent />
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default Sidebar;
