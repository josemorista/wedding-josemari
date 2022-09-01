import { Guest } from '../entities/Guest';
import { HttpError } from '../errors/HttpError';
import { CacheService } from './CacheService';

type UpdateGuestInput = Omit<Guest, 'name' | 'id'> & {
	accessToken: string;
};

export class UpdateGuest {
	constructor(private cacheService: CacheService) {}

	async execute({ accessToken, confirmed, numberOfChildren, escorts }: UpdateGuestInput): Promise<void> {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/guests`, {
				method: 'PUT',
				body: JSON.stringify({
					confirmed,
					numberOfChildren,
					escorts,
				}),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			});
			if (!response.ok) {
				const body = await response.json();
				throw new HttpError(body.error || response.statusText, response.status);
			}
			const cachedGuest = await this.cacheService.get<{ guest: Guest; accessToken: string }>('guest');
			if (cachedGuest) {
				const { guest } = cachedGuest;
				guest.confirmed = confirmed;
				guest.escorts = escorts;
				guest.numberOfChildren = numberOfChildren;
				await this.cacheService.set('guest', {
					guest,
					accessToken,
				});
			}
		} catch (error) {
			if (error instanceof Error) throw new HttpError(error.message);
			throw error;
		}
	}
}
