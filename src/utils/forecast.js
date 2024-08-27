const request = require('request')

const forecast = (address,callback) => {
    //    const url = 'http://api.weatherstack.com/current?access_key=bc059d0623317bf9d7cecc99e4add4db&query='+ latitude + ',' + longitude;
    const url = 'http://api.weatherstack.com/current?access_key=bc059d0623317bf9d7cecc99e4add4db&query='+address
    // const url = 'http://api.weatherstack.com/current?access_key=bc059d0623317bf9d7cecc99e4add4db&query=' + location;

    request({url : url, json : true}, (error,response) => {
        if(error){
            callback('Unable to connect to weather services.',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location. Try another search!',undefined)
        }
        else{
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')  ;
            callback(undefined,response.body.current.weather_descriptions+'. It is currently ' +response.body.current.temperature+ ' degrees celsius out and feels like ' + response.body.current.feelslike+'.')  ;  
        }
    
    })
}

module.exports = forecast;