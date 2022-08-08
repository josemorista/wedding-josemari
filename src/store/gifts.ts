import { defineStore } from "pinia";
import { GiftOption } from "../domain/entities/GiftOption";
import { ListGiftOptions } from "../domain/services/ListGiftOptions";
import { useGuestStore } from "./guest";

interface GiftsStoreState {
	options: Array<GiftOption>;
}

interface CartEntry {
	itemId: number;
	quantity: number;
}

const initialState: GiftsStoreState = {
	options: []
};

const listGiftOptionsService = new ListGiftOptions();

export const useGiftsStore = defineStore("gifts", {
	state() {
		return initialState;
	},
	getters: {
		cart: (state) => {
			const guestStore = useGuestStore();
			if (!guestStore.guest?.id) return [];
			const cart: Array<CartEntry> = [];
			for (const option of state.options) {
				const fromGuest = option.history.find(entry => entry.guestId === guestStore.guest?.id);
				if (fromGuest) {
					cart.push({
						itemId: option.itemId,
						quantity: fromGuest.quantity
					});
				}
			}
			return cart;

		},
		totalItensOnCart(): number {
			return this.cart.reduce((sum, current) => sum + current.quantity, 0);
		}
	},
	actions: {
		async addGift(entry: CartEntry) {
			const guestStore = useGuestStore();
			if (!guestStore.guest) throw new Error("User not logged in");
			const option = this.options.find(el => el.itemId === entry.itemId);
			if (!option) throw new Error("Invalid item");
			const fromGuest = option.history.find(el => el.guestId === guestStore.guest?.id);
			// call api to insert or update
			if (fromGuest) {
				fromGuest.quantity += entry.quantity;
			} else {
				option.history.push({
					guestId: guestStore.guest.id,
					quantity: entry.quantity
				});
			}
			option.quantityAvailableToGive -= entry.quantity;
		},
		async dropGift(entry: CartEntry) {
			const guestStore = useGuestStore();
			if (!guestStore.guest) throw new Error("User not logged in");
			const option = this.options.find(el => el.itemId === entry.itemId);
			if (!option) throw new Error("Invalid item");
			// Call api to drop gift
			const fromGuest = option.history.find(el => el.guestId === guestStore.guest?.id);
			if (fromGuest) {
				fromGuest.quantity -= entry.quantity;
				if (fromGuest.quantity <= 0) {
					option.history = option.history.filter(entry => entry.guestId !== guestStore.guest?.id);
				}
				option.quantityAvailableToGive += entry.quantity;
			}
		},
		async loadOptions() {
			this.options = await listGiftOptionsService.execute();;
		}
	}
});