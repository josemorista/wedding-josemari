import { defineStore } from 'pinia';
import { Guest } from '../domain/entities/Guest';
import { AttemptToRetrieveSession } from '../domain/services/AttemptToRetrieveSession';
import { CacheService } from '../domain/services/CacheService';
import { Login } from '../domain/services/Login';
import { UpdateGuest } from '../domain/services/UpdateGuest';

const initialState: { guest: Guest | null, accessToken: string | null } = {
	guest: null,
	accessToken: null
};

const cacheService = new CacheService();
const attemptToRetrieveSession = new AttemptToRetrieveSession(cacheService);
const loginService = new Login(cacheService);
const updateGuestService = new UpdateGuest();

export const useGuestStore = defineStore('guest', {
	state() {
		return initialState;
	},
	getters: {
		isLogged: (state) => {
			return !!state.guest;
		}
	},
	actions: {
		async login(name: string) {
			try {
				const { accessToken, guest } = await loginService.execute(name);
				this.guest = guest;
				this.accessToken = accessToken;
			} catch (error) {
				console.error(error);
			}
		},
		async updateGuest(payload: Pick<Guest, 'confirmed' | 'numberOfChildren' | 'numberOfEscorts'>) {
			if (!this.accessToken) throw new Error('User not logged in');
			await updateGuestService.execute({
				accessToken: this.accessToken,
				...payload
			});
		},
		async attemptToLogin() {
			const session = await attemptToRetrieveSession.execute();
			if (session) {
				this.guest = session.guest;
				this.accessToken = session.accessToken;
			}
		}
	}
});