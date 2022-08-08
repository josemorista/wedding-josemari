import { defineStore } from "pinia";

interface ModalStore {
	currentOpen: "login" | "cart" | null;
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
		openCartModal() {
			this.currentOpen = "cart";
		},
		closeModal() {
			this.currentOpen = null;
		}
	}
});