import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [scrolle,setScrolle] = useState(false)
  useEffect(()=>{
    const handleScrolle = () => {
      if(window.scrollY > window.innerHeight - 100){
        setScrolle(true)
      }else{
        setScrolle(false)
      }
    }
    window.addEventListener('scroll',handleScrolle);
    return()=>window.removeEventListener('scroll',handleScrolle)
  },[])
  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow transition-navbar ${scrolle ? 'bg-white navbar-light' : 'bg-transparent navbar-dark'}`} style={{ transition: 'all 0.4s ease-in-out' }} >
      <div className="container d-flex align-items-center">
        
        <div className='d-flex justify-content-start'>
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                <img src="images/bricol'connect1.png" alt="Logo" style={{ height: '40px', width: 'auto' }} className="me-2"/>
                <h3 className='brand fw-bold' id='brand'>Bricol'Connect</h3>
            </Link>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className={`nav-link fw-medium ${scrolle ? 'text-dark' : 'text-white'}`}>Accueil</NavLink>
            </li>
            <li className="nav-item">
                <HashLink smooth to="/#artisans-section" className={`nav-link fw-medium ${scrolle ? 'text-dark' : 'text-white'}`}>Artisans</HashLink>
            </li>
            <li className="nav-item">
                <HashLink smooth to="/#services-section" className={`nav-link fw-medium ${scrolle ? 'text-dark' : 'text-white'}`}>Services</HashLink>
            </li>
            <li className="nav-item">
                <HashLink smooth to="/#avis-section" className={`nav-link fw-medium ${scrolle ? 'text-dark' : 'text-white'}`}>Avis</HashLink>
                
            </li>
            <li className="nav-item">
                <HashLink smooth to='/#contact-section' className={`nav-link fw-medium ${scrolle ? 'text-dark' : 'text-white'}`}>Contact</HashLink>
            </li>
           <li className='nav-item d-flex align-items-center ms-lg-3'>
            <NavLink to='/connexion' className='text-decoration-none'>
              <button className='btn fw-bold px-4' id='bt_n1'>Connexion</button>
            </NavLink>
          
            <NavLink to='/inscritpionclient' className='text-decoration-none'>
              <button className='btn fw-bold px-4 ms-2' id='bt_n2'>Inscription</button>
            </NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;