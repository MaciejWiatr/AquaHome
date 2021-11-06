import BaseLayout from "../components/Layouts/BaseLayout";
import {
	Flex,
	Text,
	Spacer,
	Button,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import { BsBarChartFill } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import useChakraBreakpoints from "../src/hooks/useChakraBreakPoints";
import AddNewDeviceModal from "../components/Modals/AddNewDeviceModal";
import { useState } from "react";
import DevicesSection from "../components/HomeSections/DevicesSection";
import PeopleSection from "../components/HomeSections/PeopleSection";

export default function StatisticsPage() {
	const { isSm, isMd } = useChakraBreakpoints();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [activeSection, setActiveSection] = useState("devices");

	return (
		<BaseLayout>
			<Flex color="gray.500" w="full" h="full" flexDir="column">
				<Flex
					fontSize="lg"
					fontWeight="semibold"
					alignItems="center"
					w="full"
				>
					{isMd && (
						<>
							<Text fontSize="2xl">
								<BsBarChartFill />
							</Text>
							<Text ml="4">Statistics</Text>
						</>
					)}
					{/* TODO: FIX LATER */}
					<Spacer />
					<Flex minWidth="200px">
						<Button
							roundedLeft="full"
							roundedRight="none"
							colorScheme="whiteAlpha"
							color="gray.500"
							border="1px"
							borderColor="gray.300"
							size="lg"
							fontSize="sm"
							paddingLeft="8"
							bgColor={activeSection === "devices" && "gray.200"}
							_hover={{ bgColor: "gray.300" }}
							onClick={() => {
								setActiveSection("devices");
							}}
						>
							Devices
						</Button>

						<Button
							roundedRight="full"
							roundedLeft="none"
							colorScheme="whiteAlpha"
							color="gray.500"
							border="1px"
							borderLeft="0px"
							borderColor="gray.300"
							size="lg"
							fontSize="sm"
							paddingRight="8"
							bgColor={activeSection === "people" && "gray.200"}
							_hover={{ bgColor: "gray.300" }}
							onClick={() => {
								setActiveSection("people");
							}}
						>
							People
						</Button>
					</Flex>
					<Spacer />
					<Button
						rounded="full"
						colorScheme="purple"
						size="lg"
						fontSize="sm"
						onClick={onOpen}
					>
						<Flex alignItems="center">
							<BsPlusCircle />
							<Text ml="2">Add new device</Text>
						</Flex>
					</Button>
				</Flex>
				<Box w="full" h="full" mt="4" overflowY="auto">
					{activeSection === "devices" ? (
						<DevicesSection />
					) : (
						<PeopleSection />
					)}
				</Box>
			</Flex>
			<AddNewDeviceModal isOpen={isOpen} onClose={onClose} />
		</BaseLayout>
	);
}
