import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Tag} from '../../../model/tag.model';

@Injectable({ providedIn: 'root' })
export class TagService {
    constructor(private http: HttpClient) { }

    getAll(): any {
        return this.http.get<Tag[]>(environment.apiUrl + 'tag/list');
    }

    get(id: number): any {
        return this.http.get<Tag>(environment.apiUrl + 'tag/get/' + id);
    }

    save(post: Tag): Observable<Tag> {
        return this.http.post<Tag>(environment.apiUrl + 'tag/save/', post);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + 'tag/delete/' + id);
    }
}
