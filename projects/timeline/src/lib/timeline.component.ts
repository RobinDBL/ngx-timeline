import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TimelineData } from './models/data.interface';

@Component({
  selector: 'ngx-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

 @Input() data!: TimelineData[];

 @HostBinding('style.--background-color') @Input() backgroundColor?: string = '#e2e6e7';

 
 @HostBinding('style.--dot-color') @Input() dotColor?: string = '#8A9E44';

 @HostBinding('style.--future-dot-color') @Input() futureDotColor?: string = '#EEA667';

 @HostBinding('style.--ruler-color') @Input() rulerColor?: string = '#939597';

  constructor() { 
  }
  
  ngOnInit(): void {
    console.log(this.data);
  }

}
