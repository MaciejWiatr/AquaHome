import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import LoginFormLayout from "../components/Layouts/LoginFormLayout";
import { backendUrl } from "../src/globals";
import useUserStore from "../src/store/useUserStore";

const RegisterPage = () => {
	const { setUsername, updateUser } = useUserStore();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { register, handleSubmit } = useForm();
	const router = useRouter();
	const newHouseholdInputRef = useRef<any>(null);

	const createNewHousehold = async () => {
		await axios.post(`${backendUrl}register/household`, {
			name: newHouseholdInputRef.current.value,
		});
		onClose();
	};

	const onSubmit = async (data: any) => {
		await axios.post(`${backendUrl}register/user`, data);
		setUsername(data.username);
		await updateUser();
		router.push("/");
	};

	return (
		<LoginFormLayout title="Register for AquaHome">
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl id="username" mt="2">
					<FormLabel>Username</FormLabel>
					<Input type="text" {...register("username")} />
				</FormControl>
				<FormControl id="password" mt="2">
					<FormLabel>Password</FormLabel>
					<Input type="password" {...register("password")} />
				</FormControl>
				<FormControl id="household" mt="2">
					<FormLabel>Household</FormLabel>
					<Flex>
						<Input type="text" {...register("household")} />
						<Button fontSize="sm" ml="2" onClick={onOpen}>
							Create new
						</Button>
					</Flex>
				</FormControl>
				<Button w="full" mt="4" colorScheme="purple" type="submit">
					Register
				</Button>
			</form>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create new household</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mt="2">
							<FormLabel>New household name</FormLabel>
							<Input type="text" ref={newHouseholdInputRef} />
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							onClick={() => createNewHousehold()}
							colorScheme="green"
						>
							Create
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</LoginFormLayout>
	);
};

export default RegisterPage;
