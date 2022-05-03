var express = require('express');
var app = express();
let port = process.env.PORT || 8080;


app.listen(port, ()=>{
    console.log("Server Running on port 8080")
})

const planets = [
    {
        name: 'Sun',
        rotationSpeed: '1.997 km/s',
        satelites: 0,
        surfaceArea: '6.078.747.774.547 km2',
        rotationPeriod: '25.38 d',
        imageUrl: 'https://www.dropbox.com/s/delbe2cjgn47p40/Sun.png?dl=1'
    },
    {
        name: 'Mercury',
        rotationSpeed: '47.36 km/s',
        satelites: 0,
        surfaceArea: '74.800.000 km2',
        rotationPeriod: '176 d',
        imageUrl: 'https://www.dropbox.com/s/w6hz4o8atxnl8sl/Mercury.png?dl=1'
    },
    {
        name: 'Venus',
        rotationSpeed: '35.02 km/s',
        satelites: 0,
        surfaceArea: '460.200.000 km2',
        rotationPeriod: '-116.75 d',
        imageUrl: 'https://www.dropbox.com/s/56duv7j6swf43l8/Venus.png?dl=1'
    },
    {
        name: 'Earth',
        rotationSpeed: '29.78 km/s',
        satelites: 1,
        surfaceArea: '510.100.000 km2',
        rotationPeriod: '1.0 d',
        imageUrl: 'https://www.dropbox.com/s/hlj9k3gbj8vbwne/Earth.png?dl=1'
    },
    {
        name: 'Mars',
        rotationSpeed: '24.007 km/s',
        satelites: 2,
        surfaceArea: '144.800.000 km2',
        rotationPeriod: '1.02749125 d',
        imageUrl: 'https://www.dropbox.com/s/4uqyp9rfylevcv0/Mars.png?dl=1'
    },
    {
        name: 'Jupiter',
        rotationSpeed: '13.07 km/s',
        satelites: 80,
        surfaceArea: '61.420.000.000 km2',
        rotationPeriod: '9.9258 h',
        imageUrl: 'https://www.dropbox.com/s/rnpalgdr3gi5kdr/Jupiter.png?dl=1'
    },
    {
        name: 'Saturn',
        rotationSpeed: '9.68 km/s',
        satelites: 83,
        surfaceArea: '42.700.000.000 km2',
        rotationPeriod: '10h 32m 36s',
        imageUrl: 'https://www.dropbox.com/s/delbe2cjgn47p40/Saturn.png?dl=1'
    },
    {
        name: 'Uranus',
        rotationSpeed: '6.80 km/s',
        satelites: 27,
        surfaceArea: '8.083.000.000 km2',
        rotationPeriod: '-0.71832 d',
        imageUrl: 'https://www.dropbox.com/s/o3g8g8zq21yraez/Uranus.png?dl=1'
    },
    {
        name: 'Neptune',
        rotationSpeed: '5.43 km/s',
        satelites: 14,
        surfaceArea: '7.618.000.000 km2',
        rotationPeriod: '0.67125 d',
        imageUrl: 'https://www.dropbox.com/s/5gahey8nf49oxn1/Neptune.png?dl=1'
    }
  ];

app.get("/", (req,res)=>{
    res.status(200).json(planets)
})
app.get("/planets", (req,res)=>{
    res.status(200).json(planets);
})

app.get("/planets/:name", (req,res)=>{
    let planetname = req.params.name
    let planetReturn = planets.find((planet)=>planet.name === planetname)

    res.status(200).json(planetReturn)
})

