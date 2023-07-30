// components/Jumbotron.js
import React from 'react';
import jumbotronImage from '../assets/jumbotron.png';

const Jumbotron = () => {
  return (
    <div style={{ backgroundColor:'#152A46' }} className="p-8 md:flex items-center">
      {/* Bagian Kiri - Text */}
      <div className="md:w-1/2 p-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Jadi expert bersama Edspert.id</h1>
        <p className="text-lg">
          Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.
        </p>
      </div>

      {/* Bagian Kanan - Gambar */}
      <div className="md:w-1/2 p-4">
        <img
          className="w-full h-auto mx-auto"
          src={jumbotronImage}
          alt="Gambar Jumbotron"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
