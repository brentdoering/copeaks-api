const mongoose = require('mongoose');

const FourteenerSchema = new mongoose.Schema({
    mountainname: {
        type: String,
        required: [true, 'Please add a mountain peak name']
    },
    mountainrangename: {
        type: String,
        required: [true, 'Please add a mountain range name']
    },
    elevationft: {
        type: Number,
        required: [true, 'Please add an elevation']
    },
    prominenceft: {
        type: Number,
        required: [false]
    },
    isolationmi: {
        type: Number,
        required: [false]
    },
    lat: {
        type: Number,
        required: [false]
    },
    long: {
        type: Number,
        required: [false]
    },
    standardroute: {
        type: String,
        required: [false]
    },
    distancemi: {
        type: Number,
        required: [false]
    },
    elevationgainft: {
        type: Number,
        required: [false]
    },
    difficulty: {
        type: String,
        required: [false]
    },
    trafficlow: {
        type: Number,
        required: [false]
    },
    traffichigh: {
        type: Number,
        required: [false]
    },
    photo: {
        type: String,
        required: [false]
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Fourteener', FourteenerSchema)