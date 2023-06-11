import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  @Input() buttons: string[];
}
