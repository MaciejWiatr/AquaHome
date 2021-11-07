import { Flex, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import BaseLayout from "../components/Layouts/BaseLayout";
import { RiLayoutMasonryFill } from "react-icons/ri";
import StatsDashboardCard from "../components/Dasboard/StatsDashboardCard";
import UsersDashboardCard from "../components/Dasboard/UsersDashboardCard";
import DevicesDashboardCard from "../components/Dasboard/DevicesDashboardCard";

const HomePage = () => {
	return (
		<BaseLayout>
			<Flex flexDir="column" w="full" h="full" color="gray.500">
				<Flex
					fontSize="lg"
					fontWeight="semibold"
					alignItems="center"
					w="full"
				>
					<Text fontSize="2xl">
						<RiLayoutMasonryFill />
					</Text>
					<Text ml="4">Dashboard</Text>
				</Flex>
				<Grid
					overflowY={{ base: "initial", lg: "hidden" }}
					mt="4"
					w="full"
					gap="4"
					pb={{ base: "4" }}
					templateRows={{ lg: "1fr 1fr" }}
					templateColumns={{ base: "1fr", lg: "400px 1fr" }}
					gridTemplateAreas={{
						base: `"stats"
                                 "users"
                                 "devices"`,
						lg: `"stats devices"
                             "users devices"`,
					}}
				>
					<StatsDashboardCard />
					<UsersDashboardCard />
					<DevicesDashboardCard />
				</Grid>
			</Flex>
		</BaseLayout>
	);
};

export default HomePage;
