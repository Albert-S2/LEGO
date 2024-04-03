'use client';
import './Title.css';
import React from 'react';
import { picList } from './TitlePic.js';
import { useState } from 'react';

export default function Title() {
    const [index, setIndex] = useState(0);

    function handleClick1() {
        if (index === 0) {
            setIndex(picList.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function handleClick2() {
        if (index === picList.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    let legoPic = picList[index];
    
    return (
        <>
            <div className='titleContainer'>
                <div className="mainPicContainer">
                <img src={legoPic} alt="Lego Pic" className="mainPicture" />
                    <div className="mainPicButtons">
                        <button onClick={handleClick1} className="buttonPic1">
                            Previous
                        </button>
                        
                        <button onClick={handleClick2} className="buttonPic2">Next</button>
                    </div>
                </div>
                <div className="mainTitle">
                    <h1>LEGO 10327</h1>
                    <h2>Dune Atreides</h2>
                    <h3>Royal Ornithopter</h3>
                </div>
            </div>
        </>
    );
}