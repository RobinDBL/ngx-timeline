import { Component } from '@angular/core';
import { TimelineData } from 'projects/timeline/src/lib/models/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapplication';

  public data: TimelineData[] = [
    {
      title: 'title1',
      description: 'description1',
      info: 'info1',
      position: 'left',
      future: false
    },
    {
      title: 'title2',
      description: 'description2',
      info: 'info2',
      position: 'right'
    },
    {
      title: 'title3',
      description: 'description3',
      info: 'info3',
      position: 'left',
      future: true
    }
  ]
}
