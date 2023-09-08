import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { NavLink, Link, BrowserRouter } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="nav-bar">
        <Link to='/' className='Ecommerce'>
          <h2>Ecommerce</h2>
        </Link>
        <div className='Categories'>
          <div className='NavBar-link'><NavLink to={'/category/celular'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'} >Celulares</NavLink></div>
          <div className='NavBar-link'><NavLink to={'/category/tablet'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'} >Tablet</NavLink></div>
          <div className='NavBar-link'><NavLink to={'/category/notebook'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'} >NoteBooks</NavLink></div>
        </div>
        <div className='CartWidget'>
          <CartWidget />
        </div>
      </nav >
  );
};

export default Navbar;
