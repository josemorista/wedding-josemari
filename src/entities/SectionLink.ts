let incrementalId = 0;

export class SectionLink {
	key: string;

	constructor(
		readonly name: string,
		readonly elementId: string
	) {
		this.key = `SectionLink-${incrementalId}`;
		incrementalId++;
	}
}