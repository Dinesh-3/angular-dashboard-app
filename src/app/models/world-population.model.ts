export interface WorldPopulationModel {
    result: {
        country: String,
        population: Number,
        yearly_change: String,
        net_change: Number,
        density: Number,
        land_area: Number,
        migrants: Number,
        fert_rate: Number,
        med_age: Number,
        urban_op: String,
        world_share: String
    }[]
}