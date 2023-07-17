import React,{useEffect, useRef} from 'react';
import myimage from '../images/my-img-3.JPG';
import icecream from '../images/icecream1.jpg';

const Hero = () =>{
    const fadein = useRef(null);

    useEffect(() => {
        fadein.current.classList.add('fade-in');
    },[]);

    return (
        <section className='Hero' ref={fadein}>
            <div className='Hero-container'>
                <div className='hero-image-container'>
                    <img src={myimage} className='hero-my-photo'></img>
                </div>
                <h4 className='hero-name'>Hi, I'm Akshay</h4>
                <p className='hero-about'>Building interactive Front end Designs,and Photographer.</p>
                <div className='hero-latest-box'>
                    <a className='hero-latest-shots' href='#'>Latest Shots</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
