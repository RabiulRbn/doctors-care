import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    
    const {id, title,price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h4 className="title">{title}</h4>
            <h6>Cost: {price}</h6>
            <p style={{ padding: "20px" }}>{description}</p>
            
            <Link to={`/bookings/${id}`}>
                <button className=" btn btn-success rounded mb-5 p-2">Book This</button>
            </Link>
           
        </div>
    );
};

export default Service;