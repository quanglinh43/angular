import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SideObject } from '@popperjs/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor='#ccc';
  @Input() progress=50;
  @Input() progressColor= 'Blue';
  ngOnInit() {
    console.log('OnInit',{
      progress : this.progress,
      progressColor: this.progressColor  
    })
  }
  ngOnChanges(){
    console.log('OnChanges',{
      progress : this.progress,
      progressColor: this.progressColor  
    })
  }
}
