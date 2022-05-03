var express = require('express');
var app = express();
let port = process.env.PORT || 8080;


app.listen(port, ()=>{
    console.log("Server Running on port 8080")
})

const planets = [
    {
        name: 'Sun',
        description: 'Star',
        rotationSpeed: '1.997 km/s',
        distanceFromEarth: '8 LIGHT MINUTES',
        satelites: 0,
        surfaceArea: '6.078.747.774.547 km²',
        rotationPeriod: '25.38 d',
        imageUrl: 'https://i.imgur.com/7FPRkww.png'
    },
    {
        name: 'Mercury',
        rotationSpeed: '47.36 km/s',
        description: 'Smallest',
        distanceFromEarth:'4.3 LIGHT MINUTES',
        satelites: 0,
        surfaceArea: '74.800.000 km²',
        rotationPeriod: '176 d',
        imageUrl: 'https://i.imgur.com/Uc6KnOo.png'
    },
    {
        name: 'Venus',
        description: 'Hot (482 °C)',
        rotationSpeed: '35.02 km/s',
        distanceFromEarth: '2.22 LIGHT MINUTES',
        satelites: 0,
        surfaceArea: '460.200.000 km²',
        rotationPeriod: '-116.75 d',
        imageUrl: 'https://i.imgur.com/LaMYOiC.png'
    },
    {
        name: 'Earth',
        description: 'Home',
        rotationSpeed: '29.78 km/s',
        distanceFromEarth: '0.0 LIGHT MINUTES',
        satelites: 1,
        surfaceArea: '510.100.000 km²',
        rotationPeriod: '1.0 d',
        imageUrl: 'https://i.imgur.com/Wav0Lsh.png'
    },
    {
        name: 'Mars',
        description: 'Future Home',
        rotationSpeed: '24.007 km/s',
        distanceFromEarth: '3.03 LIGHT MINUTES',
        satelites: 2,
        surfaceArea: '144.800.000 km²',
        rotationPeriod: '1.02749125 d',
        imageUrl: 'https://i.imgur.com/U2Y2tLX.png'
    },
    {
        name: 'Jupiter',
        description: 'Protector',
        rotationSpeed: '13.07 km/s',
        distanceFromEarth: '32.68 LIGHT MINUTES',
        satelites: 80,
        surfaceArea: '61.420.000.000 km²',
        rotationPeriod: '9.9258 h',
        imageUrl: 'https://i.imgur.com/R63ZVfE.png'
    },
    {
        name: 'Saturn',
        description: 'Beautiful',
        rotationSpeed: '9.68 km/s',
        distanceFromEarth: '79.33 LIGHT MINUTES',
        satelites: 83,
        surfaceArea: '42.700.000.000 km²',
        rotationPeriod: '10h 32m 36s',
        imageUrl: 'https://i.imgur.com/q1zuN7F.png'
    },
    {
        name: 'Uranus',
        description: 'Cold',
        rotationSpeed: '6.80 km/s',
        distanceFromEarth: '144.5 LIGHT MINUTES',
        satelites: 27,
        surfaceArea: '8.083.000.000 km²',
        rotationPeriod: '-0.71832 d',
        imageUrl: 'https://i.imgur.com/P15HSJl.png'
    },
    {
        name: 'Neptune',
        description: 'Far Away',
        rotationSpeed: '5.43 km/s',
        distanceFromEarth: '239.05 LIGHT MINUTES',
        satelites: 14,
        surfaceArea: '7.618.000.000 km²',
        rotationPeriod: '0.67125 d',
        imageUrl: 'https://i.imgur.com/vHNKhZf.png'
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

