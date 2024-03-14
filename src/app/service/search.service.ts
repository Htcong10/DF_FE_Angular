import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchValue$: Observable<string> = this.searchValueSubject.asObservable();

  constructor() {}

  setSearchValue(value: string): void {
    this.searchValueSubject.next(value);
  }
}
