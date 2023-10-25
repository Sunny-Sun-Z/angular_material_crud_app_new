import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, switchMap } from 'rxjs';
import { Post } from './post';
import { Photo } from './photo';

const dataUrl =  'http://localhost:3000/employees';
@Injectable({
  providedIn: 'root'
})
export class OasisService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string) : Observable<Photo[]>{
    
    return this.http.get<Photo[]>(`http://localhost:3000/photos`).pipe(
      filter(data=> data.some(p=>p.thumbnailUrl.includes(searchTerm)))
    );
  }

  
}

