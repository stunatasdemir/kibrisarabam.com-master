const Car = require('../models/Car');

exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addCar = async (req, res) => {
    const car = new Car({
        fullName: req.body.fullName,
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        cashPrice: req.body.cashPrice,
        salePrice: req.body.salePrice,
        description: req.body.description,
        mileage: req.body.mileage,
        engine: req.body.engine,
        transmission: req.body.transmission,
        fuelType: req.body.fuelType,
        color: req.body.color,
        drivetrain: req.body.drivetrain,
        images: req.body.images,
        carType: req.body.carType,
        power: req.body.power,
        torque: req.body.torque,
        fuelConsumption: req.body.fuelConsumption,
        fuelTankCapacity: req.body.fuelTankCapacity,
        paintCondition: req.body.paintCondition
    });
    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        Object.assign(car, req.body);

        const updatedCar = await car.save();
        res.json(updatedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json({ message: 'Car deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBrands = async (req, res) => {
    try {
        const brands = await Car.distinct('brand');
        res.json(brands);
    } catch (error) {
        console.error('Error fetching brands:', error);
        res.status(500).send('Failed to fetch brands');
    }
};
