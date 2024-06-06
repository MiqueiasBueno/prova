import React, { useState } from 'react';
import VehicleGallery from '../components/VehicleGallery';

export default function Home() {
  const [filter, setFilter] = useState<'sale' | 'rent'>('sale');

  return (
    <div className="container mx-auto">
      <h1 className="border border-gray-500 p-2 rounded-lg font-bold text-xl mb-4 text-center mx-auto my-4 inline-block">AUTO CAR VEÍCULOS</h1>
      <div className="mb-4">
        <button onClick={() => setFilter('sale')} className={`mr-4 ${filter === 'sale' ? 'bg-blue-500 text-white border rounded-lg' : ''}`}>Venda</button>
        <button onClick={() => setFilter('rent')} className={`${filter === 'rent' ? 'bg-blue-500 text-white border rounded-lg' : ''}`}>Locação</button>
      </div>
      <h2 className="border border-gray-500 p-2 rounded-lg font-bold text-xl mb-4 text-center mx-auto my-4 inline-block">Veículos em Destaque</h2>
      <VehicleGallery featured={true} type={filter} />
      <h2 className="border border-gray-500 p-2 rounded-lg font-bold text-xl mb-4 text-center mx-auto my-4 inline-block">Outros Veículos</h2>
      <VehicleGallery featured={false} type={filter} />
    </div>
  );
}