import React from 'react';
import { BiFontColor } from 'react-icons/bi';
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({likedNum}) {
    return (
        <div className="navBar">
          <Link to="/" className='navName'>ŽENSKI PARFEMI</Link>
          <Link to="/like"  className="liked-items">
            <BsSuitHeart/>
            <p className="liked-num">{likedNum}</p>
          </Link>
        </div>
      );
    }