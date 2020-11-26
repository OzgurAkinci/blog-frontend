export class Tag {
    id: number;
    tagName: string;

    clear(): void {
        this.id = undefined;
        this.tagName = '';
    }
}
