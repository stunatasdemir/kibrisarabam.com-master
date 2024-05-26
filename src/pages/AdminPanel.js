import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

function AdminPanel() {
    const [cars, setCars] = useState([]);
    const [carDetails, setCarDetails] = useState({
        fullName: '',
        brand: '',
        model: '',
        year: '',
        price: '',
        cashPrice: '',
        salePrice: '',
        description: '',
        mileage: '',
        engine: '',
        transmission: '',
        fuelType: '',
        color: '',
        drivetrain: '',
        carType: '',
        power: '',
        torque: '',
        fuelConsumption: '',
        fuelTankCapacity: '',
        paintCondition: '',
        images: []
    });
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/cars');
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarDetails({ ...carDetails, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
        setCarDetails({ ...carDetails, images: files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in carDetails) {
            if (key === 'images') {
                for (let i = 0; i < carDetails.images.length; i++) {
                    formData.append('images', carDetails.images[i]);
                }
            } else {
                formData.append(key, carDetails[key]);
            }
        }

        try {
            if (editing) {
                await axios.put(`http://localhost:5000/api/cars/${editingId}`, formData);
                setEditing(false);
                setEditingId(null);
            } else {
                await axios.post('http://localhost:5000/api/cars', formData);
            }
            fetchCars();
            setCarDetails({
                fullName: '',
                brand: '',
                model: '',
                year: '',
                price: '',
                cashPrice: '',
                salePrice: '',
                description: '',
                mileage: '',
                engine: '',
                transmission: '',
                fuelType: '',
                color: '',
                drivetrain: '',
                carType: '',
                power: '',
                torque: '',
                fuelConsumption: '',
                fuelTankCapacity: '',
                paintCondition: '',
                images: []
            });
            setSelectedFiles([]);
        } catch (error) {
            console.error('Error submitting car:', error);
        }
    };

    const handleEdit = (car) => {
        setEditing(true);
        setEditingId(car._id);
        setCarDetails(car);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/cars/${id}`);
            fetchCars();
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Tam Ad" value={carDetails.fullName} onChange={handleInputChange} required />
                <input type="text" name="brand" placeholder="Marka" value={carDetails.brand} onChange={handleInputChange} required />
                <input type="text" name="model" placeholder="Model" value={carDetails.model} onChange={handleInputChange} required />
                <input type="text" name="year" placeholder="Yıl" value={carDetails.year} onChange={handleInputChange} required />
                <input type="text" name="price" placeholder="Fiyat" value={carDetails.price} onChange={handleInputChange} required />
                <input type="text" name="cashPrice" placeholder="Nakite Özel Fiyat" value={carDetails.cashPrice} onChange={handleInputChange} required />
                <input type="text" name="salePrice" placeholder="Satış Fiyatı" value={carDetails.salePrice} onChange={handleInputChange} required />
                <input type="text" name="description" placeholder="Açıklama" value={carDetails.description} onChange={handleInputChange} required />
                <input type="text" name="mileage" placeholder="Kilometre" value={carDetails.mileage} onChange={handleInputChange} required />
                <input type="text" name="engine" placeholder="Motor" value={carDetails.engine} onChange={handleInputChange} required />
                <input type="text" name="transmission" placeholder="Vites" value={carDetails.transmission} onChange={handleInputChange} required />
                <input type="text" name="fuelType" placeholder="Yakıt Türü" value={carDetails.fuelType} onChange={handleInputChange} required />
                <input type="text" name="color" placeholder="Renk" value={carDetails.color} onChange={handleInputChange} required />
                <input type="text" name="drivetrain" placeholder="Çekiş" value={carDetails.drivetrain} onChange={handleInputChange} required />
                <input type="text" name="carType" placeholder="Kasa Tipi" value={carDetails.carType} onChange={handleInputChange} required />
                <input type="text" name="power" placeholder="Güç" value={carDetails.power} onChange={handleInputChange} required />
                <input type="text" name="torque" placeholder="Tork" value={carDetails.torque} onChange={handleInputChange} required />
                <input type="text" name="fuelConsumption" placeholder="Yakıt Tüketimi" value={carDetails.fuelConsumption} onChange={handleInputChange} required />
                <input type="text" name="fuelTankCapacity" placeholder="Yakıt Deposu" value={carDetails.fuelTankCapacity} onChange={handleInputChange} required />
                <input type="text" name="paintCondition" placeholder="Boya-değişen" value={carDetails.paintCondition} onChange={handleInputChange} required />
                <input type="file" name="images" onChange={handleFileChange} multiple />
                <div className="selected-files">
                    {selectedFiles.map((file, index) => (
                        <img key={index} src={URL.createObjectURL(file)} alt={`Selected ${index}`} width="211.328" height="158.484" />
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">{editing ? 'Güncelle' : 'Ekle'}</button>
            </form>

            <h2>Mevcut Arabalar</h2>
            <div className="car-list">
                {cars.map(car => (
                    <div key={car._id} className="car-item">
                        <img src={car.images[0]} alt={car.fullName} className="car-image" />
                        <h3>{car.fullName}</h3>
                        <div className="car-actions">
                            <button onClick={() => handleEdit(car)} className="btn btn-edit">Düzenle</button>
                            <button onClick={() => handleDelete(car._id)} className="btn btn-delete">Sil</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPanel;
