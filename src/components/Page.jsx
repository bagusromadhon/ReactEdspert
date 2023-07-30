// components/Page.js
import React from 'react';
import CardRow from './CardRow';
import avatar from '../assets/avatar.png';

const Page = () => {
  // Dummy data untuk card
  const cards = [
    {
      id: 1,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
    {
     id: 2,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
    {
     id: 3,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
    {
     id: 4,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
     {
     id: 5,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
     {
     id: 6,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
     {
     id: 7,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
     {
     id: 8,
      image: avatar,
      TitleImage: 'Intensive Bootcamp',
      DeskripsiImage: 'Programming Laravel',
      SubDeskripsi: '(Getting Started with Laravel)',
      title: 'Programming Laravel Getting Started with Laravel 9',
      batch:'September 2022',
      mentor:'Wiliam Hartono,Farel Prayoga',
      HargaAsli: 'Rp 2060.000',
      HargaDiskon:'Rp 560.000',
    },
    // Tambahkan data card lainnya di sini
  ];

  // Split cards menjadi array dengan setiap elemen memiliki 3 card
  const cardRows = [];
  for (let i = 0; i < cards.length; i += 4) {
    cardRows.push(cards.slice(i, i + 4));
  }

  return (
    <div className="h-screen overflow-x-hidden bg-gray-100">
      <div className="p-4">
        {cardRows.map((row, index) => (
          <CardRow key={index} cards={row} />
        ))}
      </div>
    </div>
  );
};

export default Page;
