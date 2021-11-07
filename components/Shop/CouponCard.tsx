import { Image } from "@chakra-ui/image";
import { Divider, Flex, Spacer, Text } from "@chakra-ui/layout";
import React from "react";

const CouponCard = ({ shopName, shopSlogan, shopImage, shopCoupon }) => {
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
						{shopCoupon}zł{" "}
					</Text>
					<Text>discount</Text>
				</Flex>
			</Flex>
			<Divider orientation="horizontal" />
			<Text mt="2" fontSize="sm">
				{shopSlogan}
			</Text>
		</Flex>
	);
};

export default CouponCard;
