import React,{useEffect,useRef} from 'react';
import {AiOutlineInstagram, AiOutlineTwitter, AiFillGithub} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'

const Navbar = () =>{
    const fadein = useRef(null);

    useEffect(() => {
        fadein.current.classList.add('fade-in');
    },[]);

    return (
        <section className='navbar' ref={fadein}>
            <div className='navbar-container'>
                <h4 className='navbar-logo'>Akshay Srinivasan</h4>
                <div className='navbar-a-container'>
                    <a className='navbar-a' href='https://www.hackerrank.com/akshayerode'><BsCodeSlash /></a> /
                    <a className='navbar-a'href='https://www.instagram.com/_akshay.srinivasan_/'><AiOutlineInstagram/></a> /
                    <a className='navbar-a' href='https://github.com/akshay-srini'><AiFillGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default Navbar;
