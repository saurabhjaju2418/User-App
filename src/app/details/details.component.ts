import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../user.model';

@Component({ selector: 'app-details', imports: [FormsModule, RouterLink], templateUrl: './details.component.html' })
export class DetailsComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  readonly user = signal<User | undefined>(undefined);
  readonly saved = signal(false);

  constructor() { this.route.paramMap.pipe(switchMap(params => this.http.get<User[]>('/assets/data.json').pipe())).subscribe(users => this.user.set(users.find(user => user.id === this.route.snapshot.paramMap.get('id')))); }
  save(): void { this.saved.set(true); }
}
