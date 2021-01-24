import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { FetchDataService } from '../../services/fetch-data.service'
@Component({
  selector: 'app-density',
  templateUrl: './density.component.html',
  styleUrls: ['./density.component.css']
})
export class DensityComponent implements OnInit {

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
      };
      public barChartLabels: string[] = [];
      public barChartType: ChartType = 'line';
      public barChartLegend = true;
      public barChartData = [
        {data: [0], label: 'Density',borderColor: ' #e91e63',}
      ];
  constructor(
      private fetchData: FetchDataService,
  ) { }

  ngOnInit(){
    this.fetchData.getData().subscribe(
        data => {
            console.log("DENSITY COMPONENT ",data);
            this.barChartLabels = data.xAxis
            this.barChartData[0]["data"] = data.density
        }
    )
}


}
