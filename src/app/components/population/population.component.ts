import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { FetchDataService } from '../../services/fetch-data.service'
@Component({
    selector: 'app-population',
    templateUrl: './population.component.html',
    styleUrls: ['./population.component.css'],
    providers: [
        FetchDataService
      ]
})
export class PopulationComponent implements OnInit {

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      public barChartLabels: string[] = [];
      public barChartType: ChartType = 'bar';
      public barChartLegend = true;
      public barChartData = [
        {data: [0], label: 'Population'}
      ];
      public barChartColors: Color[] = [
        {
            borderColor: '#e91e63',
            backgroundColor: ' #e91e63',
          },
      ]
  constructor(
      private fetchData: FetchDataService,
  ) { }

  ngOnInit(): void{
    this.fetchData.getData().subscribe(
        data => {
            console.log("DENSITY COMPONENT ",data);
            this.barChartLabels = data.xAxis
            this.barChartData[0].data = data.population
        }
    )
}
}
