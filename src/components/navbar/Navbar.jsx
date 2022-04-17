import React, { useEffect } from 'react';
import './styles.scss';

import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    useEffect(() => {

        /* Navbar toggler */
        const toggleBtn = document.querySelector(".navbar-toggler");
        const navbarNav = document.querySelector(".navbar-nav");
        const navCloseBtn = document.querySelector(".btn-nav-close");

        toggleBtn.addEventListener("click", () => {
            navbarNav.classList.toggle("active");
        });
        navCloseBtn.addEventListener("click", () => {
            navbarNav.classList.remove("active");
        });

        /* Add icon on .nav-item if dropdown exists */
        const navItems = document.querySelectorAll(".nav-item");

        navItems.forEach((item) => {
            const hasDropdowns = item.querySelector(".dropdown") !== null;
            if (hasDropdowns) {
                item.classList.add("icon");
            }
        });

        /* add Sticky Class to navbar when Scroll down */

        window.onscroll = function () {

            let navbar = document.querySelector('.navbar');

            if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

    }, []);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <h4 style={{ fontWeight: 'bold', cursor: 'pointer' }}>Your Logo</h4>
                </div>
                <button className="navbar-toggler">
                    <AiOutlineMenu aria-hidden="true" />
                </button>
                <ul className="navbar-nav">
                    <li className="nav-close">
                        <button className="btn-nav-close">
                            <span className="close-btn">+</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#boost" className="nav-link">Boost</a>
                    </li>
                    <li className="nav-item">
                        <a href="#features" className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#price" className="nav-link">Price</a>
                    </li>
                    <li className="nav-item">
                        <a href="#news" className="nav-link">News</a>
                    </li>
                </ul>
                <div className="navbar-utils">
                    <a href="#contact" style={{ textDecoration: 'none' }}>
                        <button className='text-orange-500 bg-white shadow-sm border border-slate-100 px-4 py-1 rounded-xl'>Contact</button>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
