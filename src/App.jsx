import React from 'react';
import Navbar from './Componentes/NavBar/Navbar';
import CustomCard from './Componentes/Card/Card';

const App = () => {
    return (
        <div>
            <Navbar />
            <section id="home">
                <CustomCard />
            </section>
            <section id="about">About</section>
            <section id="contact">Contact</section>
        </div>
    );
};

export default App;
