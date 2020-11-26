import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Category} from '../../../model/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    constructor(private http: HttpClient) { }

    getAll(): any {
        return this.http.get<Category[]>(environment.apiUrl + 'category/list');
    }

    get(id: number): any {
        return this.http.get<Category>(environment.apiUrl + 'category/get/' + id);
    }

    save(post: Category): Observable<Category> {
        return this.http.post<Category>(environment.apiUrl + 'category/save/', post);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + 'category/delete/' + id);
    }
}
