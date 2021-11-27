import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import './Bookings.css'

const Bookings = () => {
    
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});
    

    useEffect(() => {
        

        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    useEffect(() => {
        

        const foundService = services.find(service => service.id == serviceId)
        console.log(foundService)
        setSingleService(foundService)
       
    }, [services]);

    

    return (

        // Service detail page
        <div className="">

            <div className="card w-5- mx-auto booking-container" style={{width: "18rem"}}>
                <img src={singleService?.img} class="card-img-top" alt="..."/>
                <div className ="card-body">
                <h3>Service Name:<h5>{singleService?.title}</h5> </h3>
                    <h5>Cost:{singleService?.price}</h5>
                    <p>{singleService?.description}</p>
                </div>
            </div>


            
        </div>
    );
};

export default Bookings;