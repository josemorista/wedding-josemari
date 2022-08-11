export class CacheService {
	private prefix: string;

	constructor() {
		this.prefix = '@weddingjosemari';
	}

	private getPrefixedKey(key: string) {
		return `${this.prefix}${key}`;
	}

	async get<T>(key: string) {
		const entry = sessionStorage.getItem(this.getPrefixedKey(key));
		if (!entry) return;
		const parsed = JSON.parse(entry);
		return parsed.data as T;
	}

	async set(key: string, value: unknown) {
		const parsed = {
			data: value
		};
		sessionStorage.setItem(this.getPrefixedKey(key), JSON.stringify(parsed));
	}
}