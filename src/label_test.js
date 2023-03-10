import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  styleUrls: ['component.css']
})
export class AppComponent {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    let subPerf = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        datasets: [{
          label: 'My Dataset',
          backgroundColor: "rgba(255, 99, 132,0.4)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
          data: [10, 12, 6, 5, 11, 7, 9]
        }]
      },
      options: {
        responsive: true,
        onClick: event => {
          let point = Chart.helpers.getRelativePosition(event, subPerf.chart);
          let xIndex = subPerf.scales['x-axis-0'].getValueForPixel(point.x);
          let label = subPerf.data.labels[xIndex];
          console.log(label + ' at index ' + xIndex);
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
