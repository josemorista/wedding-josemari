export interface GiftOption {
	itemId: number;
	name: string;
	picture: string;
	quantityNeeded: number;
	quantityAvailableToGive: number;
	averagePrice: number;
	formattedPrice: string;
	suggestedSeller: string | null;
	history: Array<{
		guestId: number;
		quantity: number;
	}>
}