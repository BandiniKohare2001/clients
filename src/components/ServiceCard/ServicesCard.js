import React from 'react';
import Config from "./../../data/ServiceCardData.json"
import "./ServiceCards.css"

const ServiceCards = () => {

    return (
        <div>
            <h1 className='text-center mt-5 pt-5'>Services</h1>
            <div className='d-flex containers mx-5'>
                {
                    Config.Scards.map((serviceCard, index) => {
                        const { title, img, description } = serviceCard

                        return (<>
                            <div className='maincar-container my-4'>
                                <div class="card card-contain bg-gradient-very-ghost-white">
                                    <img src={img} class="card-img-top" alt="..." />
                                    <div className='text-con'>
                                        <h3 class="card-title">{title}</h3>
                                        <p class="card-text">{description}</p>
                                        <a href="#" className="px-3 py-2 btn mt-3 btn-extra-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left" style={{ backgroundColor: "orange", color: "white", width: "200px" }}>
                                        <span className="btn-text">Explore More</span>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default ServiceCards
