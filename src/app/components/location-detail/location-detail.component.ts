import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, pluck, tap } from 'rxjs';

@Component({
  selector: 'app-location-detail',
  standalone: false,
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.css'
})
export class LocationDetailComponent {
  state$!: Observable<object>;
  branch!: any;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state), tap(data => console.log(data)));

    this.state$.subscribe(data => this.branch = data);
  }
}
