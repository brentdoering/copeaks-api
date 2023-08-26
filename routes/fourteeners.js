const express = require('express');
const router = express.Router();


const fourteeners = [
    {
        "id": 1,
        "mountainname": "Mount Elbert",
        "mountainrangename": "Sawatch Range",
        "elevationft": 14440,
        "prominenceft": 9093,
        "isolationmi": 670,
        "lat": 39.1178,
        "long": -106.4454,
        "standardroute": "Northeast Ridge†",
        "distancemi": 9.5,
        "elevationgainft": 4700,
        "difficulty": "Class 1",
        "trafficlow": 20000,
        "traffichigh": 25000,
        "photo": "https://www.14ers.com/photos/mtelbert/peakphotos/large/201207_Elbert01.jpg"
    },
    {
        "id": 2,
        "mountainname": "Mount Massive",
        "mountainrangename": "Sawatch Range",
        "elevationft": 14428,
        "prominenceft": 1961,
        "isolationmi": 5.06,
        "lat": 39.1875,
        "long": -106.4757,
        "standardroute": "East Slopes†",
        "distancemi": 14.5,
        "elevationgainft": 4500,
        "difficulty": "Class 2",
        "trafficlow": 7000,
        "traffichigh": 10000,
        "photo": "https://www.14ers.com/photos/mtmassive/peakphotos/large/200508_Massive01.jpg"
    },
    {
        "id": 3,
        "mountainname": "Mount Harvard",
        "mountainrangename": "Sawatch Range",
        "elevationft": 14421,
        "prominenceft": 2360,
        "isolationmi": 14.93,
        "lat": 38.9244,
        "long": -106.3207,
        "standardroute": "South Slopes†",
        "distancemi": 14,
        "elevationgainft": 4600,
        "difficulty": "Class 2",
        "trafficlow": 5000,
        "traffichigh": 7000,
        "photo": "https://www.14ers.com/photos/harvardgroup/peakphotos/large/200706_Harv01.jpg"
    },
    {
        "id": 4,
        "mountainname": "Blanca Peak",
        "mountainrangename": "Sangre de Cristo Range",
        "elevationft": 14351,
        "prominenceft": 5326,
        "isolationmi": 103.4,
        "lat": 37.5775,
        "long": -105.4856,
        "standardroute": "Northwest Ridge†",
        "distancemi": 17,
        "elevationgainft": 6500,
        "difficulty": "Hard Class 2",
        "trafficlow": 1000,
        "traffichigh": 3000,
        "photo": "https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Blanca01.jpg"
    },
    {
        "id": 5,
        "mountainname": "La Plata Peak",
        "mountainrangename": "Sawatch Range",
        "elevationft": 14343,
        "prominenceft": 1836,
        "isolationmi": 6.28,
        "lat": 39.0294,
        "long": -106.4729,
        "standardroute": "Northwest Ridge†",
        "distancemi": 9.25,
        "elevationgainft": 4500,
        "difficulty": "Class 2",
        "trafficlow": 5000,
        "traffichigh": 7000,
        "photo": "https://www.14ers.com/photos/laplatapeak/peakphotos/large/201205_Lap01.jpg"
    },
]

// Get all entries 
router.get('/', (req, res) => {
    res.json({ success: true, data: fourteeners });
});

// Get one entry
router.get('/:id', (req, res) => {
    const fourteener = fourteeners.find((fourteener) => fourteener.id === +req.params.id);

    if(!fourteener) {
       return res.status(404).json({ success: false, error: 'Resource not found'})
    }

    res.json({ success: true, data: fourteener });
});

// Add an entry
router.post('/', (req, res) => {
    const fourteener = {
        id: fourteeners.length + 1,
        mountainname: req.body.mountainname,
        mountainrangename: req.body.mountainrangename,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10)
    }

    fourteeners.push(fourteener)

    res.json({ success: true, data: fourteener })
});

// Update an entry
router.put('/:id', (req, res) => {
    const fourteener = fourteeners.find((fourteener) => fourteener.id === +req.params.id);

    if(!fourteener) {
       return res.status(404).json({ success: false, error: 'Resource not found'})
    }

    fourteener.mountainname = req.body.mountainname || fourteener.mountainname;
    fourteener.mountainrangename = req.body.mountainrangename || fourteener.mountainname;


    res.json({ success: true, data: fourteener });
});

module.exports = router;