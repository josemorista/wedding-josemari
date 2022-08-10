import { defineStore } from "pinia";
import { GiftOption } from "../domain/entities/GiftOption";
import { GiveGift } from "../domain/services/GiveGift";
import { ListGiftOptions } from "../domain/services/ListGiftOptions";
import { UpdateGiftQuantity } from "../domain/services/UpdateGiftQuantity";
import { useGuestStore } from "./guest";

interface GiftsStoreState {
	options: Array<GiftOption>;
	isBusy: boolean;
}

interface CartEntry {
	itemId: number;
	quantity: number;
}

const initialState: GiftsStoreState = {
	options: [],
	isBusy: false
};

const listGiftOptionsService = new ListGiftOptions();
const giveGiftService = new GiveGift();
const updateGiftQuantity = new UpdateGiftQuantity();

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
			if (!guestStore.guest || !guestStore.accessToken) throw new Error("User not logged in");
			const option = this.options.find(el => el.itemId === entry.itemId);
			if (!option) throw new Error("Invalid item");
			const fromGuest = option.history.find(el => el.guestId === guestStore.guest?.id);
			try {
				this.isBusy = true;
				if (!fromGuest) {
					await giveGiftService.execute({
						accessToken: guestStore.accessToken,
						itemId: entry.itemId,
						quantity: entry.quantity
					});
				} else {
					await updateGiftQuantity.execute({
						accessToken: guestStore.accessToken,
						itemId: entry.itemId,
						quantity: entry.quantity + fromGuest.quantity
					});
				}
				if (fromGuest) {
					fromGuest.quantity += entry.quantity;
				} else {
					option.history.push({
						guestId: guestStore.guest.id,
						quantity: entry.quantity
					});
				}
				option.quantityAvailableToGive -= entry.quantity;
			} finally {
				this.isBusy = false;
			}
		},
		async dropGift(entry: CartEntry) {
			const guestStore = useGuestStore();
			if (!guestStore.guest || !guestStore.accessToken) throw new Error("User not logged in");
			const option = this.options.find(el => el.itemId === entry.itemId);
			if (!option) throw new Error("Invalid item");
			const fromGuest = option.history.find(el => el.guestId === guestStore.guest?.id);
			try {
				this.isBusy = true;
				if (fromGuest) {
					await updateGiftQuantity.execute({
						accessToken: guestStore.accessToken,
						itemId: entry.itemId,
						quantity: fromGuest.quantity - entry.quantity
					});
					fromGuest.quantity -= entry.quantity;
					if (fromGuest.quantity <= 0) {
						option.history = option.history.filter(entry => entry.guestId !== guestStore.guest?.id);
					}
					option.quantityAvailableToGive += entry.quantity;
				}
			} finally {
				this.isBusy = false;
			}
		},
		async loadOptions() {
			this.options = await listGiftOptionsService.execute();;
		}
	}
});