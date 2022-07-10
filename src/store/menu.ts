import { defineStore } from "pinia";

interface MenuStore {
	isOpen: boolean;
}

const initialState: MenuStore = {
	isOpen: false
}

export const useMenuStore = defineStore("menu", {
	state() {
		return initialState;
	},
	actions: {
		openMenu() {
			this.isOpen = true;
		},
		closeMenu() {
			this.isOpen = false;
		},
		toggleMenu() {
			if (this.isOpen) {
				this.closeMenu();
			} else {
				this.openMenu();
			}
		}
	}
});