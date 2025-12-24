import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class UiModalComponent {
  @Input() open = false;
  @Input() title = '';

  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.open) {
      this.close.emit();
    }
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('ui-modal-backdrop')) {
      this.close.emit();
    }
  }
}
