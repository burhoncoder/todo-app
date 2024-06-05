import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() isLoading?: boolean;
  @Input() type = 'button';
  @Input() btnType: 'primary' | 'danger' = 'primary';

  @Output() btnClick = new EventEmitter();

  handleClick(event: MouseEvent) {
    this.btnClick.emit(event);
  }
}
