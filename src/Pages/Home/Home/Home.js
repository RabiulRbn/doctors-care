import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
// import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            
            
            
        </div>
    );
};

export default Home;