import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../user-profile/user-profile';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserProfileComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  count = signal(0);
  link = 'https://example.com';
  messages: string[] = [];

  constructor(public userService: UserService) {}

  addCount() {
    this.count.update((c) => c + 1);
  }

  handleChildEvent(message: string) {
    this.messages.push(message);
  }
}
