import { Component, Input } from '@angular/core';
import { IData } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() item: IData;
  itemsNav = ['Projects', 'Expertise', 'Job', 'News', 'About'];

  buttons = [
    'C.F. Møller Architects',
    'Lean, green and digital with BIM',
    'Sustainability',
    'Awards',
    'team',
    'History',
  ];
}
