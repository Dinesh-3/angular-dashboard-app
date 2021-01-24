import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { FetchDataService } from '../../services/fetch-data.service'

@Component({
  selector: 'app-land-area',
  templateUrl: './land-area.component.html',
  styleUrls: ['./land-area.component.css']
})
export class LandAreaComponent implements OnInit {

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      public barChartLabels: string[] = []
      public barChartType: ChartType = 'bar';
      public barChartLegend = true;
      public barChartData = [
        {data: [0], label: 'Land Area', backgroundColor: '#e91e63'}
      ];
  constructor(
      private fetchData: FetchDataService,
  ) { }

  ngOnInit(){
    this.fetchData.getData().subscribe(
        data => {
            console.log("DENSITY COMPONENT ",data);
            this.barChartLabels = data.xAxis
            this.barChartData[0]["data"] = data.landArea
        }
    )
}

}
