import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // const { name, img, price, time } = props.service;
    const { name, img, price, time } = service;
    return (
        <div className="single-service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}/Time: {time}</p>
        </div>
    );
};

export default Service;