import { Guest } from '../entities/Guest';
import { HttpError } from '../errors/HttpError';
import { CacheService } from './CacheService';

interface LoginOutput {
	accessToken: string;
	guest: Guest;
}

export class Login {
	constructor(private cacheService: CacheService) {

	}
	async execute(name: string): Promise<LoginOutput> {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/guests/login`, {
				method: 'POST',
				body: JSON.stringify({ name }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const body = await response.json();
			if (!response.ok) {
				throw new HttpError(body.error || response.statusText, response.status);
			}
			const loginOutput = {
				accessToken: body.authToken,
				guest: body.guest
			};
			await this.cacheService.set('guest', loginOutput);
			return loginOutput;
		} catch (error) {
			if (error instanceof Error) throw new HttpError(error.message);
			throw error;
		}
	}
}