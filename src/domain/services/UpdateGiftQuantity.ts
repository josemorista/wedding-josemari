import { HttpError } from "../errors/HttpError";

interface GiveGiftInput {
	itemId: number;
	quantity: number;
	accessToken: string;
}

export class UpdateGiftQuantity {

	async execute({
		accessToken,
		itemId,
		quantity
	}: GiveGiftInput): Promise<void> {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/gifts/quantity`, {
				method: "PATCH",
				body: JSON.stringify({
					itemId,
					quantity
				}),
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${accessToken}`
				}
			});
			if (!response.ok) {
				const body = await response.json();
				throw new HttpError(body.error || response.statusText, response.status);
			}
		} catch (error) {
			if (error instanceof Error) throw new HttpError(error.message);
			throw error;
		}
	}
}