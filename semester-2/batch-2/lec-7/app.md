## Weather App

# Need data -> from an API. -> server address-> get the data

# data should be in a particular format (JSON)


# JSON
{
    "location": {
        "name": "Pune",
        "region": "Maharashtra",
        "country": "India",
        "lat": 18.5333,
        "lon": 73.8667,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1769151243,
        "localtime": "2026-01-23 12:24"
    },
    "current": {
        "last_updated_epoch": 1769150700,
        "last_updated": "2026-01-23 12:15",
        "temp_c": 27.0,
        "temp_f": 80.6,
        "is_day": 1,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 7.2,
        "wind_kph": 11.5,
        "wind_degree": 158,
        "wind_dir": "SSE",
        "pressure_mb": 1015.0,
        "pressure_in": 29.99,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 28,
        "cloud": 5,
        "feelslike_c": 26.0,
        "feelslike_f": 78.7,
        "windchill_c": 27.0,
        "windchill_f": 80.6,
        "heatindex_c": 26.0,
        "heatindex_f": 78.7,
        "dewpoint_c": 7.0,
        "dewpoint_f": 44.7,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 7.6,
        "gust_mph": 8.2,
        "gust_kph": 13.2,
        "short_rad": 554.68,
        "diff_rad": 85.85,
        "dni": 622.22,
        "gti": 312.21
    }
}


## Dependencies

# 1. Data source : API ->
https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=pune&aqi=no


# 2.Flow

1.Dummy UI -> with dummy data  [IN-PROGRESS]
## (start with it...)

2.Need data-> make API request (how ??);//Figured out [TO_DO]

3.Data -> DOM update.[TO-DO]