import BaseLayout from "../components/Layouts/BaseLayout";
import { Flex, Text, Spacer, Button } from "@chakra-ui/react";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { BsPlusCircle } from "react-icons/bs";
import useChakraBreakpoints from "../src/hooks/useChakraBreakPoints";

export default function Home() {
	const { isMd } = useChakraBreakpoints();

	return (
		<BaseLayout>
			<Flex fontSize="lg" fontWeight="semibold" color="gray.500" w="full">
				<Flex alignItems="center" w="full">
					{isMd && (
						<>
							<Text fontSize="2xl">
								<RiLayoutMasonryFill />
							</Text>
							<Text ml="4">Dashboard</Text>
							<Spacer />
						</>
					)}

					<Flex>
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
							_hover={{ bgColor: "gray.200" }}
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
							_hover={{ bgColor: "gray.200" }}
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
					>
						<Flex alignItems="center">
							<BsPlusCircle />
							<Text ml="2">Add new device</Text>
						</Flex>
					</Button>
				</Flex>
			</Flex>
		</BaseLayout>
	);
}
