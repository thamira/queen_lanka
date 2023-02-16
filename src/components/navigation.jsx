import React from 'react';
import { ReactComponent as Home } from '../assets/img/icons-home.svg';
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Navigation = (props) => {
  const pathname = window.location.pathname
  const navigate = useNavigate();

	return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
            {pathname !== '/' && (<a className="navbar-brand" href="#page-top"  onClick={e => navigate('/')}><Home className="home"  /></a>)}
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#about"> О компани</a></li>
                    <li className="nav-item"><a className="nav-link" href="#services"> Наш Ассортимент</a></li>
                    <li className="nav-item"><a className="nav-link" href="#catalog">Катаог</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Конаткты</a></li>
                </ul>
            </div>
        </div>
    </nav>
	)
}

export default Navigation;