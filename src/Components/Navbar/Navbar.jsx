import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon.png'; // Ensure the correct path to your menu icon
import { Link } from 'react-scroll';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`${sticky ? 'dark-nav' : ''}`}>
            <Link to='hero' smooth={true} offset={0} duration={500}>
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <ul className={mobileMenu ? 'show-mobile-menu' : ''}>
                <li>
                    <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} offset={-150} duration={500}>About us</Link>
                </li>
                <li>
                    <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link>
                </li>
                <li>
                    <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>
                </li>
            </ul>
            <img src={menuIcon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;
