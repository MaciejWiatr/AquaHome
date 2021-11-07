import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Divider, Flex, Spacer, Text } from "@chakra-ui/layout";
import { ImDroplet } from "react-icons/im";
import useUserStore from "../../src/store/useUserStore";
import React from "react";

const CouponCard = ({ shopName, shopSlogan, shopImage, shopCoupon, shopPrice }) => {
	const { user } = useUserStore();

	return (
		<Flex flexDir="column" rounded="lg" bg="white" shadow="sm" p="4">
			<Flex mb="4">
				<Image
					height="14"
					width="50%"
					objectFit="contain"
					src={shopImage}
					alt={shopName}
				/>{" "}
				<Spacer />
				<Flex flexDir="column" textAlign="right">
					<Text fontWeight="bold" color="purple.400">
						{shopCoupon}{" "}
					</Text>
					<Text>discount</Text>
				</Flex>
			</Flex>
			<Divider orientation="horizontal" />
			<Text m="2" fontSize="sm">
				{shopSlogan}
			</Text>
			<Button
					colorScheme={user.droplets >= shopPrice ? "purple" : "gray"}
				>
					{shopPrice} <ImDroplet />
			</Button>
		</Flex>
	);
};

export default CouponCard;
