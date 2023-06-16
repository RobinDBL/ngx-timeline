# @robindbl/ngx-timeline

This is an angular module that creates a timeline component. 

![image of the timeline](assets/ngx-timeline.png)

## Installation

Install the package using:

```
npm install @robindbl/ngx-timeline
```

Then, add bootstrap to `angular.json`

```
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
            ],
"scripts": [
            "node_modules/@popperjs/core/dist/umd/popper.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/jquery/dist/jquery.js"
          ]
```


## Usage

Import the module in the app.module:

```
import { TimelineModule } from '@robindbl/ngx-timeline';

[...]
  imports: [
    [...]
    TimelineModule,
  ],
```

Then you can use the `ngx-timeline` in every component:

```
<ngx-timeline [data]="data"></ngx-timeline>
```

The `data` argument is required.

There are a few optional arguments:

`backgroundColor`: Change the background color of the timeline objects

`dotColor`: Change the color of the dots in the middle

`futureDotColor`: Change the color of the dots in the middle when `future` is enabled.

`rulerColor`: Change the color of the ruler in the middle.

eg.

```
<ngx-timeline [data]="data" [backgroundColor]="'#d3d3d3'" [dotColor]="'blue'" [futureDotColor]="'rgb(255, 165, 0)'" [rulerColor]="'#111111'"></ngx-timeline>

```

For a complete example, see https://github.com/RobinDBL/ngx-timeline/tree/main/projects/testapplication

## Data

The required `data` argument is an object. Here are its properties:

```
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

```  
`title`: A string that shows the title of the event

`description`: The description of the event. This supports HTML tags

`info`: Extra information about the event. Can be used to specify the date

`position`: The position of the event: `left` or `right`.

`future`: If the event is a future event (not completed). This can be used to set the middle dot to a different color.

every property can be left empty. 