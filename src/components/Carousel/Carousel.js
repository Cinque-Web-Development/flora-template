import React from 'react';
import './Carousel.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Spratt1 from '../../assets/spratt1.jpg';
import Spratt2 from '../../assets/spratt2.jpg';
import Spratt3 from '../../assets/spratt3.jpg';
import Spratt4 from '../../assets/spratt4.jpg';
import Spratt5 from '../../assets/spratt5.jpg';
import Ceyda from '../../assets/ceyda.jpg';
import Priscilla1 from '../../assets/priscilla1.jpg';
import Priscilla2 from '../../assets/priscilla2.jpg';
import Zhang from '../../assets/zhang.jpg';



export default function Carousel() {
    return (
        <div>
            <AliceCarousel disableButtonsControls="true" infinite="true" disableDotsControls="true" animationType="slide" animationDuration="900"  autoPlay="true" autoPlayControls="true" autoPlayInterval="4000" autoPlayStrategy='default'>
                <img className="landing-image" src={Spratt1} alt=""></img>
                <img className="landing-image" src={Spratt2} alt=""></img>
                <img className="landing-image" src={Spratt3} alt=""></img>
                <img className="landing-image" src={Spratt4} alt=""></img>
                <img className="landing-image" src={Spratt5} alt=""></img>
                <img className="landing-image" src={Ceyda} alt=""></img>
                <img className="landing-image" src={Priscilla1} alt=""></img>
                <img className="landing-image" src={Priscilla2} alt=""></img>
                <img className="landing-image" src={Zhang} alt=""></img>
            </AliceCarousel>
        </div>
    )
}
