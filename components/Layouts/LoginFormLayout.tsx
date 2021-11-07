import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const LoginFormLayout = ({ title, children }) => {
	return (
		<Flex w="full" h="full">
			<Flex
				w="full"
				pos="relative"
				justifyContent="center"
				alignItems="center"
			>
				<Flex
					flexDir="column"
					justifyContent="center"
					alignItems="center"
					pos="relative"
					zIndex="2"
					bg="white"
					p="8"
					rounded="lg"
					shadow="sm"
				>
					<Flex flexDir="column">
						<Text as="h1" fontSize="2xl" fontWeight="semibold">
							{title}
						</Text>
						{children}
					</Flex>
				</Flex>

				<Image
					zIndex="1"
					pos="absolute"
					top="0"
					left="0"
					h="full"
					w="full"
					objectFit="cover"
					src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt="water"
				/>
			</Flex>
		</Flex>
	);
};

export default LoginFormLayout;
