import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() toggle!: boolean;
  @Output() toggleChange= new EventEmitter<boolean>();
   check(){
    this.toggleChange.emit(!this.toggle)
   }
}
