import React, { useState } from 'react';
import PurchaseForm from './PurchaseForm';

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

interface VehicleModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose }) => {
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  const handlePurchaseClick = () => {
    setShowPurchaseForm(true);
  };

  const handleClosePurchaseForm = () => {
    setShowPurchaseForm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 p-4 rounded relative">
        <button onClick={onClose} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">Fechar</button>
        <div >
          <img src={`/imagens/${vehicle.photo}`} alt={vehicle.model} className="w-full h-48 object-cover mb-4"/>
          <h2 className="text-2xl">{vehicle.model}</h2>
          <p>Ano: {vehicle.year}</p>
          <p>R$ {vehicle.price}</p>
          <p>{vehicle.description}</p>
          <button onClick={handlePurchaseClick} className="bg-blue-500 text-white p-2 rounded mt-4">
          {vehicle.type === 'rent' ? 'Alugar' : 'Comprar'}
          </button>
        </div>
        {showPurchaseForm && (
          <PurchaseForm vehicle={vehicle} onClose={handleClosePurchaseForm} />
        )}
      </div>
    </div>
  );
};

export default VehicleModal;
