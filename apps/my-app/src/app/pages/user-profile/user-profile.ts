import { Component, Input, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../services/user.service';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css'],
})
export class UserProfileComponent {
  @Input() counter = signal(0);
  @Input() user!: User;

  notifyParent = output<string>();

  sendMessage() {
    this.notifyParent.emit(`Mensagem enviada pelo usuário: ${this.user.name}`);
  }
}
