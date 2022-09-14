import React from 'react';
import OnePerfume from './OnePerfume.jsx';

const Perfumes = ({perfumes, onAdd, onDelete }) => {


    return (
        <div className="all-perfumes">

            {perfumes.map((c) => (
              //jedinica znaci da nije u korpi
        <OnePerfume perfume={p} key={p.id} onAdd={onAdd} onDelete={onDelete} inLikedPerfumes={1}/>
      ))}

        </div>
      );
    };
	