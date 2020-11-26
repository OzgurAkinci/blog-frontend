import {Category} from './category.model';

export class Post {
    id: number;
    postTitle: string;
    postDetail: string;
    categories: Category[];

    clear(): void {
        this.id = undefined;
        this.postTitle = '';
        this.postDetail = '';
        this.categories = [];
    }
}
