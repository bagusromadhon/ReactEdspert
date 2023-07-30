// components/Card.js
import React from 'react';

const Card = ({ image, title, HargaAsli, HargaDiskon, TitleImage, DeskripsiImage, SubDeskripsi, batch, mentor }) => {
  return (
    <div  style={{ boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;' }} className="card-item w-80 h-64 mx-2 border rounded-xl overflow-hidden flex flex-col">
      <div style={{ backgroundColor: '#152A46' }} className="h-48 w-full flex items-center">
        <img className="h-24 w-24 object-contain" src={image} alt="Card Image" />
        <div className="ml-2">
          <h3 className="text-lg font-bold text-orange-500">{TitleImage}</h3>
          <p className="font-bold text-white">{DeskripsiImage}</p>
          <p className="text-white">{SubDeskripsi}</p>
        </div>
      </div>
      <div className="deskripsi-item p-2 flex-grow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">batch {batch}</p>
        <p className="text-sm text-gray-500">mentor {mentor}</p>
        <div className="harga flex justify-between">
          <p>
            <span className="line-through">{HargaAsli}</span>
          </p>
          <p className="font-bold text-green-500">{HargaDiskon}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
