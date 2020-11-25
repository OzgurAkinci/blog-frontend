import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../../../model/post.model';
import {environment} from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: HttpClient) { }

    getAll(): any {
        return this.http.get<Post[]>(environment.apiUrl + 'post/list');
    }
}
