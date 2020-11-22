export class Post {
    id: number;
    postTitle: string;
    postDetail: string;

    clear(): void {
        this.id = undefined;
        this.postTitle = '';
        this.postDetail = '';
    }
}
