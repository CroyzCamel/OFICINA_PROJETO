// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';
import graos from '../assets/images/graos.jpg'; 
import cafe1 from '../assets/images/cafe1.jpeg'; 

function Hero() {

    const [backgroundImage, setBackgroundImage] = useState(graos);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage(prevImage => (prevImage === graos ? cafe1 : graos));
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <section className="hero d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${backgroundImage}` }}>

            <div className="container text-center">
                <h2>Cada xícara conta uma história</h2>
                <p>Bem-vindo ao Café do Amanhã, onde o aroma do café se mistura com a brisa do mar.</p>
                </div>
        </section>
    );
}

export default Hero;
