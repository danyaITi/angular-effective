import { Component, Input } from '@angular/core';
import { IAbout } from '../../models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  @Input() data: IAbout;
}
