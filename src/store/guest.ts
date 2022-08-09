import { defineStore } from "pinia";
import { Guest } from "../domain/entities/Guest";
import { Login } from "../domain/services/Login";
import { UpdateGuest } from "../domain/services/UpdateGuest";

const initialState: { guest: Guest | null, accessToken: string | null } = {
	guest: null,
	accessToken: null
};

const loginService = new Login();
const updateGuestService = new UpdateGuest();

export const useGuestStore = defineStore("guest", {
	state() {
		return initialState;
	},
	getters: {
		isLogged: (state) => {
			return !!state.guest;
		}
	},
	actions: {
		async login(name: string) {
			try {
				const { accessToken, guest } = await loginService.execute(name);
				this.guest = guest;
				this.accessToken = accessToken;
			} catch (error) {
				console.error(error);
			}
		},
		async updateGuest(payload: Pick<Guest, "confirmed" | "numberOfChildren" | "numberOfEscorts">) {
			if (!this.accessToken) throw new Error("User not logged in");
			await updateGuestService.execute({
				accessToken: this.accessToken,
				...payload
			});
		}
	}
})