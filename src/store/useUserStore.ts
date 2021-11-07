import { backendUrl } from "./../globals";
import axios from "axios";
import create from "zustand";
import { persist } from "zustand/middleware";

interface ITask {
	name: string;
	type: string;
	reward: number;
	completed: boolean;
}

interface IUserState {
	username: string;
	user: {
		username: string;
		password: string;
		household: string;
		droplets: number;
		active_tasks: ITask[];
	};
	setUsername: (username: string) => void;
	updateUser: () => void;
	toggleTask: (type: string) => Promise<void>;
	logout: () => void;
}

// Tutaj miała być autoryzacja JWT ale brakło nam czasu :(
const useUserStore = create<IUserState>(
	persist(
		(set, get) => ({
			username: "",
			user: {
				username: "",
				password: "",
				household: "",
				droplets: 0,
				active_tasks: [],
			},

			setUsername: (username) => {
				set((state) => ({ ...state, username }));
			},
			updateUser: async () => {
				const resp = await axios.get(
					`${backendUrl}get/user?username=${get().username}`
				);
				const user = resp.data.data;
				set((state) => ({ ...state, user: user }));

				console.log(get());
			},
			toggleTask: async (type: string) => {
				await axios.put(`${backendUrl}put/task`, {
					username: get().username,
					type: type,
				});
				await get().updateUser();
			},
			logout: () => {
				set((s) => ({ ...s, username: "" }));
			},
		}),
		{
			name: "aqh:user",
		}
	)
);

export default useUserStore;
