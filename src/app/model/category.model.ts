export class Category {
    id: number;
    categoryName: string;
    parentCategoryId: number;

    clear(): void {
        this.id = undefined;
        this.categoryName = '';
        this.parentCategoryId = null;
    }
}
