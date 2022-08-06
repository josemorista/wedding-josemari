import { defineStore } from "pinia";

interface ModalStore {
	currentOpen: "login" | null;
}

const initialState: ModalStore = {
	currentOpen: null
};

export const useModalStore = defineStore("modal", {
	state() {
		return initialState
	},
	actions: {
		openLoginModal() {
			this.currentOpen = "login";
		},
		closeModal() {
			this.currentOpen = null;
		}
	}
});