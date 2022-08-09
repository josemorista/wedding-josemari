import { Guest } from "../entities/Guest";
import { HttpError } from "../errors/HttpError";

type UpdateGuestInput = Omit<Guest, "name" | "id"> & {
	accessToken: string;
}

export class UpdateGuest {
	async execute({
		accessToken,
		confirmed,
		numberOfChildren,
		numberOfEscorts
	}: UpdateGuestInput): Promise<void> {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/guests`, {
				method: "PUT",
				body: JSON.stringify({
					confirmed,
					numberOfChildren,
					numberOfEscorts
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