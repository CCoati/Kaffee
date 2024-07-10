
import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            sections.forEach((sec) => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        document
                            .querySelector(`header nav a[href*=${id}]`)
                            .classList.add('active');
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
                <img className='logo1' src="/IMG/kaffee.png" alt="Logo" />
            <nav>
                <a href="#home" className="active">Home</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#services">Sing in</a>
                
            </nav>
        </header>
    );
};

export default Navbar;
