import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import Select from "react-select";
import React from "react";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const AddNewDeviceModal = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent borderRadius="lg">
				<ModalHeader>Add new device</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<FormControl>
						<FormLabel>Select device type</FormLabel>
						<Select
							styles={{
								control: (provided) => ({
									...provided,
									borderColor: "#E2E8F0",
								}),
							}}
							options={options}
						/>
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Set display name</FormLabel>
						<Input placeholder="Last name" />
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Set mac address</FormLabel>
						<Input placeholder="Last name" />
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button onClick={onClose}>Cancel</Button>
					<Button colorScheme="purple" ml="2">
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddNewDeviceModal;
