import { Guest } from '../entities/Guest';
import { CacheService } from './CacheService';

interface LoginOutput {
	accessToken: string;
	guest: Guest;
}

export class AttemptToRetrieveSession {
	constructor(private cacheService: CacheService) {}
	async execute() {
		return (await this.cacheService.get<LoginOutput>('guest')) || null;
	}
}