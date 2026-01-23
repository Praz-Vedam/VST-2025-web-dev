## Weather App

# Need data -> API
# Data in a particular format (JSON)
```json```

{
  "location": {
    "name": "Pune",
    "region": "Maharashtra",
    "country": "India",
    "lat": 18.5333,
    "lon": 73.8667,
    "tz_id": "Asia/Kolkata",
    "localtime_epoch": 1769143077,
    "localtime": "2026-01-23 10:07"
  },
  "current": {
    "last_updated_epoch": 1769142600,
    "last_updated": "2026-01-23 10:00",
    "temp_c": 24.2,
    "temp_f": 75.6,
    "is_day": 1,
    "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
    },
    "wind_mph": 7.2,
    "wind_kph": 11.5,
    "wind_degree": 139,
    "wind_dir": "SE",
    "pressure_mb": 1018,
    "pressure_in": 30.05,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 39,
    "cloud": 5,
    "feelslike_c": 24.9,
    "feelslike_f": 76.7,
    "windchill_c": 24.2,
    "windchill_f": 75.6,
    "heatindex_c": 24.9,
    "heatindex_f": 76.7,
    "dewpoint_c": 9.5,
    "dewpoint_f": 49,
    "vis_km": 10,
    "vis_miles": 6,
    "uv": 4.8,
    "gust_mph": 8.2,
    "gust_kph": 13.2,
    "short_rad": 231.65,
    "diff_rad": 47.44,
    "dni": 0,
    "gti": 47.41
  }
}

## Requirements -

# API (Data source) -> 
https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=pune&aqi=no

# Flow ->

# Dummy UI 
1.with dummy data.
2.call API get actual data. (to-do)
3.DOM update