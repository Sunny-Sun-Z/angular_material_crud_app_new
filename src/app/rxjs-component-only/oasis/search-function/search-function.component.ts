import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OasisService } from '../oasis.service';
import { Post } from '../post';
import { Observable, debounce, debounceTime, distinctUntilChanged, filter, map, retry, startWith, switchMap } from 'rxjs';
import { Photo } from '../photo';

//slow one
// @Component({
//   selector: 'app-search-function',
//   template: `
//     <div>
//       <label for="">Search jsonplaceholder.typicode.com/photos for images containing:</label>
//       <input (keyup)="doSearch($any($event.target).value)">   <!--add strictDomEventTypes: false to tsconfig.json "angularComplierOptions"-->
//     </div>
//     <div class='box' *ngFor="let post of results">
//       <img [src]="post.thumbnailUrl" alt="post.title">
//     </div>
//   `,
//   styleUrls: ['./search-function.component.css']
// })
// export class SearchFunctionComponent {
//   search = new FormControl('')
//   results: any //Post[] = [];

//   constructor(private service: OasisService) { }
//   doSearch(searchTerm: string): void {
//     this.results = [];
//     this.service.search(searchTerm).subscribe((result) => {
//       this.results = result
//     })
//   }
// }

//better one
@Component({
  selector: 'app-search-function',
  template: `
  <div class="container">
  <mat-card >
   <mat-card-title> <div>
      <label for="">Search jsonplaceholder.typicode.com/photos for images containing:</label>
        <input [formControl] = "search"> 
    </div>
    <div class='box' *ngFor="let post of results$ | async">
      <img [src]="post.thumbnailUrl" alt="post.title">
    </div></mat-card-title>
    <mat-card-content><div>
    <app-emp-list>test</app-emp-list>
    </div></mat-card-content>
    </mat-card></div>
  `,
  styleUrls: ['./search-function.component.css']

})
export class SearchFunctionComponent {
  search = new FormControl('')
  results$?: Observable<Photo[]>
  constructor(private service: OasisService) {
    this.results$ = this.search.valueChanges.pipe(
      map((s) => s?.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      filter((s) => s !== ''),
      switchMap((s) => service.search(s!).pipe(
        retry(3),
        startWith([])))
    )
  }
}

