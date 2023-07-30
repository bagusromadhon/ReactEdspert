// components/CardRow.js
import React from 'react';
import Card from './card';

const CardRow = ({ cards }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto">
      {cards.map((card) => (
        <Card key={card.id} image={card.image} TitleImage={card.TitleImage} DeskripsiImage={card.DeskripsiImage} SubDeskripsi={card.SubDeskripsi} title={card.title} HargaAsli={card.HargaAsli} batch={card.batch} mentor={card.mentor} HargaDiskon={card.HargaDiskon} />
      ))}
    </div>
  );
};

export default CardRow;
