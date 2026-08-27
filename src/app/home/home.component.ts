import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../user.model';

@Component({ selector: 'app-home', imports: [FormsModule, RouterLink], templateUrl: './home.component.html' })
export class HomeComponent {
  private readonly http = inject(HttpClient);
  readonly users = signal<User[]>([]);
  readonly query = signal('');
  readonly filteredUsers = computed(() => { const q = this.query().trim().toLowerCase(); return q ? this.users().filter(user => Object.values(user).some(value => value.toLowerCase().includes(q))) : this.users(); });

  constructor() { this.http.get<User[]>('/assets/data.json').subscribe(users => this.users.set(users)); }
}
