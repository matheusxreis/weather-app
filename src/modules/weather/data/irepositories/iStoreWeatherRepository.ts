
export type WeatherStoreParams = {
city:string,
actualTemperature:string,
minTemperature: string,
maxTemperature: string,
photo?:string,
lastConsult:number,
cityId: string
}
export interface iStoreWeatherRepository {
    storeWeather(params: WeatherStoreParams):Promise<void>,
    findConsultById(cityId: string): Promise<WeatherStoreParams|null>,
    updateConsult(params: WeatherStoreParams):Promise<void>
}
