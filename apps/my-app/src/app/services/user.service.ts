import { Injectable, signal, Signal } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users = signal<User[]>([
    { id: 1, name: 'Matheus', email: 'matheus@example.com' },
    { id: 2, name: 'Larissa', email: 'larissa@example.com' },
    { id: 3, name: 'João', email: 'joao@example.com' },
  ]);

  get users(): Signal<User[]> {
    return this._users;
  }

  addUser(user: User) {
    this._users.update((users) => [...users, user]);
  }
}
