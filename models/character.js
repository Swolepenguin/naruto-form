const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    Name: String,
    village: String,
    completedMissions: integer,
    abilities: [abilitySchema]
})

const abilitySchema = new mongoose.Schema({
    chakraType: String,
    signatureMove: String,
    chakraStorage: String 
})

const NarutoForm = mongoose.model('characters', characterSchema )

module.exports = NarutoForm