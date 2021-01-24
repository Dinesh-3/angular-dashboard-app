import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WorldPopulationModel } from '../models/world-population.model'
import { Injectable } from '@angular/core';
import chartModel from "./chart.model"
import { cloneDeep } from "lodash";

@Injectable()
export class FetchDataService implements OnInit {

    populationData: WorldPopulationModel[] = []
    chartModel: Object = {
        labels: [],
        datasets: [{
            label: 'Population',
            data: [],
            backgroundColor: "#2196f3",
            borderWidth: 2,
            borderColor: "#2196f3",
            fill: false
        }]
    }
    constructor(
        private http: HttpClient,
    ) { }
    ngOnInit() { }

    getData() {
        return this.http.get("https://data-api-v2.herokuapp.com/data",
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }).pipe(
                map(
                    (populationData: any) => {
                        console.log(populationData.result);

                        const xAxis: string[] = []
                        const density: number[] = []
                        const landArea: number[] = []
                        const population: number[] = []

                        populationData.result.forEach((element: {
                            country: string,
                            population: number,
                            yearly_change: string,
                            net_change: number,
                            density: number,
                            land_area: number,
                            migrants: number,
                            fert_rate: number,
                            med_age: number,
                            urban_op: string,
                            world_share: string
                        }, index: any) => {
                            if (index < 40) {
                                xAxis.push(element.country)
                                density.push(element.density)
                                landArea.push(element.land_area)
                                population.push(element.population)
                            }
                        });

                        // chartModel["data"]["labels"] = xAxis

                        // const populationChart = cloneDeep(chartModel)
                        // populationChart["data"]["datasets"][0]["data"] = population

                        // const densityChart = cloneDeep(chartModel)
                        // densityChart["data"]["datasets"][0]["data"] = density

                        // const landAreaChart = cloneDeep(chartModel)
                        // landAreaChart["data"]["datasets"][0]["data"] = landArea


                        return {
                            // populationChart,
                            // densityChart,
                            // landAreaChart
                            xAxis,
                            density,
                            landArea,
                            population
                        }
                    }
                )
            )
    }
}