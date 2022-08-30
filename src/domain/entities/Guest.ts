export interface Guest {
	id: number;
	name: string;
	confirmed: boolean;
	numberOfChildren: number;
	escorts: Array<{ name: string }>;
}
