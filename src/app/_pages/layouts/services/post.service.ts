import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../../../model/post.model';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: HttpClient) { }

    getAll(): any {
        return this.http.get<Post[]>(environment.apiUrl + 'post/list');
    }

    get(id: number): any {
        return this.http.get<Post>(environment.apiUrl + 'post/get/' + id);
    }

    save(post: Post): Observable<Post> {
        return this.http.post<Post>(environment.apiUrl + 'post/save/', post);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + 'post/delete/' + id);
    }
}
