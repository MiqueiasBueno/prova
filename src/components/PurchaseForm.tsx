import React, { useState } from 'react';

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

interface PurchaseFormProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ vehicle, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para processar a compra
    console.log('Compra realizada:', { name, phone, email, vehicle });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
      <div className=" bg-blue-950 p-4 rounded relative">
        <button onClick={onClose} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded">Fechar</button>
        <form onSubmit={handleSubmit}>
          <h1 className="border border-gray-500 p-2 text-xl mb-4">Comprar {vehicle.model}</h1>
          <div className="mb-4 ">
            <label>Nome:</label>
            <input 
              type="text " 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="border p-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label>Telefone:</label>
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className="border p-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border p-2 w-full  text-black"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Finalizar Compra</button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;


