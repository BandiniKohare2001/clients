import React from 'react';
import { Link } from 'react-router-dom';
import Config from "./../../data/ServiceCardData.json";
import "./ServiceCards.css";

const ServiceCards = () => {
    return (
        <div>
            <h1 className='text-center mt-5 pt-5'>Our Services</h1>
            <div className='containers mx-3'>
                {Config.Scards.map((serviceCard, index) => {
                    const { title, img, description, link } = serviceCard;

                    return (
                        <div className='maincar-container my-4 ' key={index}>
                            <div className="card card-contain bg-gradient-very-ghost-white">
                                <img src={img} className="card-img-top" alt={title} />
                                <div className='text-con'>
                                    <h3 className="card-title">{title}</h3>
                                    <p className="card-text">{description}</p>
                                    <Link to={link} className="px-3 py-2 btn mt-3 btn-extra-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left" style={{ backgroundColor: "orange", color: "white", width: "200px" }}>
                                        <span className="btn-text">Explore More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ServiceCards;
