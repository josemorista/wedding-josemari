export interface GiftOption {
	itemId: number;
	name: string;
	picture: string;
	quantityNeeded: number;
	quantityAvailableToGive: number;
	averagePrice: number;
	history: Array<{
		guestId: number;
		quantity: number;
	}>
}