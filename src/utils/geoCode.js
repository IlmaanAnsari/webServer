const request = require('request')
//encodeURIComponent(address)

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaWxtYWFuIiwiYSI6ImNseDIzY2Z2ZjBnOWkyanM0YXpoM2d6NHMifQ.tozuTPbevHi9Snjk5OAN4g&limit=1'

    request({url : url, json : true}, (error,response) => {
    if(error){
        callback('Unable to connect to location services.',undefined)
    }
    else if(response.body.features.length === 0){
        callback('Unable to find location. Try another search.',undefined)
    }
    else{
        callback(undefined, {
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location : response.body.features[0].place_name
        })  ; 
//         console.log('Longitude : ' + response.body.features[0].center[1])  ;  
    }

})

}

module.exports = geocode;













    // "features": [
    //   {
    //     "id": "place.6957135",
    //     "type": "Feature",
    //     "place_type": [
    //       "place"
    //     ],
    //     "relevance": 1,
    //     "properties": {
    //       "mapbox_id": "dXJuOm1ieHBsYzphaWhQ",
    //       "wikidata": "Q84"
    //     },
    //     "text": "London",
    //     "place_name": "London, Greater London, England, United Kingdom",
    //     "bbox": [-0.351708, 51.384527, 0.153177, 51.669993],
    //     "center": [-0.127647, 51.5073],
    //     "geometry": {
    //       "type": "Point",
    //       "coordinates": [-0.127647, 51.5073]
    //     },
    //     "context": [
    //       {
    //         "id": "district.591439",
    //         "mapbox_id": "dXJuOm1ieHBsYzpDUVpQ",
    //         "wikidata": "Q23306",
    //         "text": "Greater London"
    //       },
    //       {
    //         "id": "region.9295",
    //         "mapbox_id": "dXJuOm1ieHBsYzpKRTg",
    //         "wikidata": "Q21",
    //         "short_code": "GB-ENG",
    //         "text": "England"
    //       },
    //       {
    //         "id": "country.8783",
    //         "mapbox_id": "dXJuOm1ieHBsYzpJazg",
    //         "wikidata": "Q145",
    //         "short_code": "gb",
    //         "text": "United Kingdom"
    //       }
    //     ]
    //   }
    // ],
  