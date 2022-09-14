import React from 'react';
import { BiLike,BiDislike } from "react-icons/bi";

    //const OneCar = (props) => {
      //u zagrade stavljamo objekat koji hocemo da izvucemo iz propsa

      function OnePerfume({perfume,onAdd,onDelete, inLikedPerfumes}){
    
        return (
            <div className={inLikedPerfumes === 1 ? "card" : "card-liked"}>
            <img
              className={inLikedPerfumes ===1 ? "card-img-top" :"card-img-left"}
              src={perfume.img}
              alt="slika parfema "
            />
            <div className={inLikedPerfumes === 1 ? "card-body" : "card-body-left"}>
              {inLikedPerfumes === 1 ? (
            <>
             <h1 className="card-title">{perfume.title}</h1>
              <p className="card-text">{perfume.description}</p>
    
            </>
          ) : (
            <>
             <h1 className="card-title">{perfume.title}</h1>
              <p className="card-text">{perfume.description}</p>
              <h2 >Ukupan broj lajkova: {perfume.amount}</h2>
            </>
          )}
            </div>
    
    {inLikedPerfumes=== 1 ? (
            <>
              <button
                className="btn" id='prvoDugme'
                onClick={() => onAdd(perfume.title, perfume.id)}
              >
                <BiLike />
              </button>
              <button className="btn"
              onClick={() => onDelete(perfume.title, perfume.id)}
              >
                <BiDislike />
              </button>
            </>
          ) : (
           <>
           </>
          )}
          </div>
        );
    };
    export default OnePerfume;