import React from 'react';
import Navbar from './Componentes/NavBar/Navbar'

const App = () => {
    return (
        <div>
            <Navbar />
            <section id="home">Home</section>
            <section id="about">About</section>
            <section id="contact">Contact</section>
        </div>
    );
};

export default App;
