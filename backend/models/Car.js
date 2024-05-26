const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    mileage: { type: Number, required: true },
    engine: { type: String, required: true },
    transmission: { type: String, required: true },
    fuelType: { type: String, required: true },
    acceleration: { type: String },
    power: { type: Number, required: true },
    weight: { type: String },
    cargoVolume: { type: String },
    drivetrain: { type: String, required: true },
    images: [{ type: String }],
    carType: { type: String, required: true },
    torque: { type: String },
    fuelConsumption: { type: String },
    fuelTankCapacity: { type: String },
    paintCondition: { type: String }
});

module.exports = mongoose.model('Car', carSchema);
