import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../../../model/post.model';

//const API_URL = 'http://localhost:8888/blog-server/';
const API_URL = 'http://185.247.139.7:8182/blog-server/';
@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: HttpClient) { }

    getAll(): any {
        return this.http.get<Post[]>(API_URL + 'post/list');
    }
}
