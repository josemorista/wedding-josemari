import { defineStore } from "pinia";
import { Guest } from "../domain/entities/Guest";

const initialState: { guest: Guest | null } = {
	guest: {
		confirmed: true,
		id: 1,
		name: "José",
		numberOfChildren: 1,
		numberOfEscorts: 1
	}
};

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
		setGuest(guest: Guest) {
			this.guest = guest;
		}
	}
})