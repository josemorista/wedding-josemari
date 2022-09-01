import { defineStore } from 'pinia';
import { Guest } from '../domain/entities/Guest';
import { AttemptToRetrieveSession } from '../domain/services/AttemptToRetrieveSession';
import { CacheService } from '../domain/services/CacheService';
import { Login } from '../domain/services/Login';
import { UpdateGuest } from '../domain/services/UpdateGuest';

const initialState: { guest: Guest | null; accessToken: string | null } = {
	guest: null,
	accessToken: null,
};

const cacheService = new CacheService();
const attemptToRetrieveSession = new AttemptToRetrieveSession(cacheService);
const loginService = new Login(cacheService);
const updateGuestService = new UpdateGuest(cacheService);

export const useGuestStore = defineStore('guest', {
	state() {
		return initialState;
	},
	getters: {
		isLogged: (state) => {
			return !!state.guest;
		},
	},
	actions: {
		async login(name: string) {
			const { accessToken, guest } = await loginService.execute(name);
			this.guest = guest;
			this.accessToken = accessToken;
		},
		async updateGuest(payload: Pick<Guest, 'confirmed' | 'numberOfChildren' | 'escorts'>) {
			if (!this.accessToken) throw new Error('User not logged in');
			await updateGuestService.execute({
				accessToken: this.accessToken,
				...payload,
			});
			if (this.guest) {
				this.guest.confirmed = payload.confirmed;
				this.guest.escorts = payload.escorts;
				this.guest.numberOfChildren = payload.numberOfChildren;
			}
		},
		async attemptToLogin() {
			const session = await attemptToRetrieveSession.execute();
			if (session) {
				this.guest = session.guest;
				this.accessToken = session.accessToken;
			}
		},
	},
});
