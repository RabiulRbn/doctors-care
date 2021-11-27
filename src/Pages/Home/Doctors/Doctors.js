import React from 'react';
import './Doctors.css'

import Doctor1 from '../../../images/doctors/team-1.jpg';
import Doctor2 from '../../../images/doctors/team-2.jpg'
import Doctor3 from '../../../images/doctors/team-3.jpg'
import Doctor4 from '../../../images/doctors/team-4.jpg'
import Doctor5 from '../../../images/doctors/team-5.jpg'
import Doctor6 from '../../../images/doctors/team-6.jpg'
import Doctor from '../Doctor/Doctor';

const doctors = [
    {
        img: Doctor1,
        name: 'Dr. James Adult',
        expert: 'Cardiologist'
    },
    {
        img: Doctor2,
        name: 'Dr. James Alison',
        expert: 'Medicine'
    },
    {
        img: Doctor3,
        name: 'Dr. Peter Adlock',
        expert: 'Neurologist'
    },
    {
        img: Doctor4,
        name: 'Dr. Jelin Alis',
        expert: 'Dermatology'
    },
    {
        img: Doctor5,
        name: 'Dr. Daniel Peter',
        expert: 'Orthopedic'
    },
    {
        img: Doctor6,
        name: 'Dr. Mark',
        expert: 'Neurology'
    },
]


const Doctors = () => {
    return (
        <div className="container p-5 ">
            <h2 className="title mt-5">Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;