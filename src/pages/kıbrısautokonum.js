// src/pages/kıbrısautokonum.js
import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';
import { Link as ScrollLink } from 'react-scroll';


import './kıbrısautokonum.css';

function KıbrısAutoKonum() {
    return (
        <div className="kıbrısautokonum-container">
            <Navbar />
            <div className="page-title">Yerimiz</div>
            <div className="map-container">
                <iframe
                    title="Kıbrıs Auto Konum"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.909635787908!2d33.3327155!3d35.2048587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMzXCsDEyJzE3LjYiTiAzM8KwMTknNTguNSJF!5e0!3m2!1str!2str!4v1615215038917!5m2!1str!2str"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <div className="contact-details">
                <div>
                    <h2>İletişim Bilgileri</h2>
                    <p><strong>Adres:</strong> Kıbrıs, Lefkoşa</p>
                    <p><strong>Telefon:</strong> +90 533 867 08 88</p>
                    <p><strong>E-posta:</strong> info@kıbrısauto.com</p>
                </div>
                <div>
                    <h2>Çalışma Saatleri</h2>
                    <p>Hafta içi: 09:00 - 18:00</p>
                    <p>Cumartesi: 10:00 - 17:00</p>
                    <p>Pazar: 11:00 - 16:00</p>
                </div>
                </div>
            <footer className="footer">
                <div className="footer_menu">
                    <Link to='/kibrisautokonum'>
                        <ul className="footer_menu-item">Yerimiz</ul>
                    </Link>
                    <ScrollLink to="tum-araclar" smooth={true} duration={500}>
                        <ul className="footer_menu-item">Araçlarımız</ul>
                    </ScrollLink>
                    <Link to='/kıbrısautokonum'>
                        <ul className="footer_menu-item">İletişim ve Konum</ul>
                    </Link>
                </div>
                <div className="footer_icons">
                    <a href="#">
                        <ul className="footer_menu-instagram"><InstagramLogo /></ul>
                    </a>
                </div>
                <div className="footer_company-text">Kibrisarabam @ 2024 All rights reserved.</div>
            </footer>
        </div>
    );
}

export default KıbrısAutoKonum;
