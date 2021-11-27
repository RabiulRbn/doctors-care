import React from 'react';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, img, expert } = doctor;
    return (
        <div className="doctor col-lg-4 col-sm-6 col-12 g-3 ">
            <img className="img" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-success">{expert}</h5>
            <button className="btn btn-success mb-2">Appointment</button>
        </div>
    );
};

export default Doctor;