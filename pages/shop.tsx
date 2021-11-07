import React, { useEffect, useState } from "react";
import BaseLayout from "../components/Layouts/BaseLayout";
import { Flex, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { IoTicket } from "react-icons/io5";
import CouponCard from "../components/Shop/CouponCard";
import MerchandiseCard from "../components/Shop/MerchandiseCard";
import axios from "axios";
import { backendUrl } from "../src/globals";

const ShopPage = () => {
	const [coupons, setCoupons] = useState([]);
	const [merchandise, setMerchandise] = useState([]);

	const fetchCoupons = async () => {
		const resp = await axios.get(`${backendUrl}get/coupons`);
		const data = resp.data.data;
		console.log(data);
		setCoupons(data);
	};

	const fetchMerchandise = async () => {
		const resp = await axios.get(`${backendUrl}get/merch`);
		const data = resp.data.data;
		console.log(data);
		setMerchandise(data);
	};

	useEffect(() => {
		fetchCoupons();
		fetchMerchandise();
	}, []);

	return (
		<BaseLayout>
			<Flex flexDir="column" w="full" h="full" color="gray.500">
				<Flex
					fontSize="lg"
					fontWeight="semibold"
					alignItems="center"
					w="full"
				>
					<IoTicket /> <Text ml="2">Shop</Text>
				</Flex>
				<Flex flexGrow={1} flexDir="column">
					<Text
						mt="4"
						fontSize="xl"
						fontWeight="semibold"
						color="gray.600"
					>
						Merchandise
					</Text>
					<SimpleGrid
						columns={{ sm: 2, md: 3, lg: 4 }}
						mt="2"
						spacing="4"
					>
						{merchandise.map((props) => (
							<MerchandiseCard
								key={props.productName}
								productName={props.name}
								productImage={props.logo}
								productPrice={props.price}
							/>
						))}
					</SimpleGrid>
					<Text
						fontSize="xl"
						fontWeight="semibold"
						color="gray.600"
						mt="4"
					>
						Coupons
					</Text>
					<SimpleGrid
						mt="2"
						pb="4"
						columns={{ sm: 2, md: 3, lg: 4 }}
						spacing="4"
					>
						{coupons.map((props) => (
							<CouponCard
								key={props.shopName}
								shopName={props.shop}
								shopImage={props.logo}
								shopCoupon={props.discount}
								shopSlogan={props.description}
								shopPrice={props.price}
							/>
						))}
					</SimpleGrid>
				</Flex>
			</Flex>
		</BaseLayout>
	);
};

export default ShopPage;
