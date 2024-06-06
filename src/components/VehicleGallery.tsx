import React, { useState } from 'react';
import vehicles from '../data/vehicles';
import VehicleModal from './VehicleModal';

interface Vehicle {
  code: string;
  model: string;
  year: number;
  photo: string;
  price: number;
  type: string;
  featured: boolean;
  description: string;
}

interface VehicleGalleryProps {
  featured: boolean;
  type: 'sale' | 'rent';
}

const VehicleGallery: React.FC<VehicleGalleryProps> = ({ featured }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // Filtrar veículos para compra e para locação
  const saleVehicles = vehicles.filter(vehicle => vehicle.type === 'sale' && vehicle.featured === featured);
  const rentVehicles = vehicles.filter(vehicle => vehicle.type === 'rent' && vehicle.featured === featured);

  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4 font-semibold">Veículos para Compra</h2>
      <div className="grid grid-cols-3 gap-4">
        {saleVehicles.map(vehicle => (
          <div key={vehicle.code} className="border p-4 cursor-pointer" onClick={() => handleVehicleClick(vehicle)}>
            <img src={`/imagens/${vehicle.photo}`} alt={vehicle.model} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl">{vehicle.model}</h2>
            <p>Ano: {vehicle.year}</p>
            <p>R$ {vehicle.price}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl mb-4 font-semibold">Veículos para Locação</h2>
      <div className="grid grid-cols-3 gap-4">
        {rentVehicles.map(vehicle => (
          <div key={vehicle.code} className="border p-4 cursor-pointer" onClick={() => handleVehicleClick(vehicle)}>
            <img src={`/imagens/${vehicle.photo}`} alt={vehicle.model} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl">{vehicle.model}</h2>
            <p>Ano: {vehicle.year}</p>
            <p>R$ {vehicle.price}</p>
          </div>
        ))}
      </div>
      {selectedVehicle && (
        <VehicleModal vehicle={selectedVehicle} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default VehicleGallery;
