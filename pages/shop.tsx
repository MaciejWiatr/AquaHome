import React from "react";
import BaseLayout from "../components/Layouts/BaseLayout";
import { Flex, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { IoTicket } from "react-icons/io5";
import CouponCard from "../components/Shop/CouponCard";
import MerchandiseCard from "../components/Shop/MerchandiseCard";

const products = [
	{
		productName: "Eko torba",
		productImage:
			"https://img.pakamera.net/i1/1/926/damskie-12109275_8051387926.jpg",
		productPrice: "1000",
	},
	{
		productName: "Eko skarpetki",
		productImage:
			"https://f.allegroimg.com/s512/03465a/12cb2a01455e922d1aa004b2cf7f/MANY-MORNINGS-KOLOROWE-SKARPETKI-ARBUZ-43-46",
		productPrice: "1000",
	},
	{
		productName: "Eko koszulka",
		productImage:
			"https://image.spreadshirtmedia.net/image-server/v1/mp/products/T461A1MPA1086PT17X50Y37D174565068FS2951/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2,modelId=2588,crop=list/mniej-samochodow-wiecej-drzew-ekologiczna-koszulka-damska.jpg",
		productPrice: "5000",
	},
];

const coupons = [
	{
		shopName: "Empik",
		shopSlogan: "Wszystko dla rodziny",
		shopImage:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Empik.svg/1280px-Empik.svg.png",
		shopCoupon: "10",
	},
	{
		shopName: "Lidl",
		shopSlogan: "Wszystko dla rodziny",
		shopImage:
			"https://logos-world.net/wp-content/uploads/2020/12/Lidl-Logo.png",
		shopCoupon: "10",
	},
	{
		shopName: "H&M",
		shopSlogan: "Wszystko dla rodziny",
		shopImage: "https://www2.hm.com/hm-logo.png",
		shopCoupon: "10",
	},
	{
		shopName: "Empik",
		shopSlogan: "Wszystko dla rodziny",
		shopImage:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Logo-ca-red.svg/1200px-Logo-ca-red.svg.png",
		shopCoupon: "10",
	},
	{
		shopName: "Empik",
		shopSlogan: "Wszystko dla rodziny",
		shopImage:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Logo-ca-red.svg/1200px-Logo-ca-red.svg.png",
		shopCoupon: "10",
	},
];

const ShopPage = () => {
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
						{products.map((props) => (
							<MerchandiseCard
								key={props.productName}
								{...props}
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
							<CouponCard key={props.shopName} {...props} />
						))}
					</SimpleGrid>
				</Flex>
			</Flex>
		</BaseLayout>
	);
};

export default ShopPage;
