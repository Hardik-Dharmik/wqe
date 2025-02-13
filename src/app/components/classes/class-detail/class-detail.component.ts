import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, pluck, tap } from 'rxjs';
import { Class } from '../../../services/class.service';

@Component({
  selector: 'app-class-detail',
  standalone: false,
  templateUrl: './class-detail.component.html',
  styleUrl: './class-detail.component.css'
})
export class ClassDetailComponent {
  state$!: Observable<object>;
  class!: Class;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state), pluck('class'), tap(console.log));

    this.state$.subscribe(data => this.class = data as Class);
  }
}
