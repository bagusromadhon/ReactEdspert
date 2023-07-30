// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-64 py-8 px-4 md:px-8 flex items-center">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Bagian Kiri */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <p className="font-bold">Alamat Perusahaan</p>
          <p>Jalan Perusahaan No. 123</p>
          <p>Kota Perusahaan</p>
          <p>Negara Perusahaan</p>
        </div>
        
        {/* Bagian Kanan */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-between">
          {/* Bagian Program */}
          <div className="mb-4 md:mb-0">
            <p className="font-bold">Program</p>
            <ul>
              <li>Online Course</li>
              <li>Mini Bootchamp</li>
              <li>Bootchamp</li>
            </ul>
          </div>

          {/* Bagian Bidang Ilmu */}
          <div className="mb-4 md:mb-0">
            <p className="font-bold">Bidang Ilmu</p>
            <ul>
              <li>Digital Marketing</li>
              <li>Product Management</li>
              <li>English</li>
              <li>Programming</li>
            </ul>
          </div>

          {/* Bagian Tentang Edspert */}
          <div>
            <p className="font-bold">Tentang Edspert</p>
            <ul>
              <li>Bantuan</li>
              <li>Kontak Kami</li>
              <li>Media sosial</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
