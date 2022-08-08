import { GiftOption } from "../entities/GiftOption";
import { HttpError } from "../errors/HttpError";

const priceFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
	minimumFractionDigits: 2
})

export class ListGiftOptions {
	private formatPrices(option: Omit<GiftOption, 'formattedPrice'>) {
		return { ...option, formattedPrice: priceFormatter.format(option.averagePrice) };
	}

	async execute(): Promise<Array<GiftOption>> {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/gifts`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			});
			const body = await response.json();
			if (!response.ok) {
				throw new HttpError(body.error || response.statusText, response.status);
			}
			return body.map(this.formatPrices);
		} catch (error) {
			if (error instanceof Error) throw new HttpError(error.message);
			throw error;
		}
	}
}