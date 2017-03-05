### DOJO ###

## Weather API ##

```shell
npm run dojo
```

1. Parse result from _Yahoo! Weather Api_ showing:
  * City, State and Country
  * Geolocation: "latitude, longitude"

2. Fetch _Yahoo! Weather Api_ again but using **API_FORECAST_QUERY** replacing _{locationKey}_ with _woeid_ property from previous request _(API_CITYCODE_QUERY)_ and show:
  * Weather condition, weather temperature.
  * Last Update time: located format .

3. With information retrieved on last exercise, show a table with forecast for next days as below:
```
    .---------------------------------------------------.
    |  Conditions for Location                          |
    |---------------------------------------------------|
    |   Date    |        Condition        | Min  | Max  |
    |-----------|-------------------------|------|------|
    | 2017-3-5  | Thunderstorms           | 20ºC | 27ºC |
    |    .          .                        .      .   |
    |    .          .                        .      .   |
    |    .          .                        .      .   |
    | 2017-3-14 | Mostly Sunny            | 16ºC | 25ºC |
    '---------------------------------------------------'
```
