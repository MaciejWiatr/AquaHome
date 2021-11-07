import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useForm } from "react-hook-form";
import LoginFormLayout from "../components/Layouts/LoginFormLayout";
import useUserStore from "../src/store/useUserStore";

const LoginPage = () => {
	const { setUsername, updateUser } = useUserStore();
	const { register, handleSubmit } = useForm();
	const router = useRouter();

	const onSubmit = async (data) => {
		setUsername(data.username);
		await updateUser();
		router.push("/");
	};
	return (
		<LoginFormLayout title="Login to AquaHome">
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl id="username" mt="2">
					<FormLabel>Username</FormLabel>
					<Input type="text" {...register("username")} />
				</FormControl>
				<FormControl id="password" mt="2">
					<FormLabel>Password</FormLabel>
					<Input type="password" {...register("password")} />
				</FormControl>
				<Button w="full" mt="4" colorScheme="purple" type="submit">
					Login
				</Button>
			</form>
		</LoginFormLayout>
	);
};

export default LoginPage;
