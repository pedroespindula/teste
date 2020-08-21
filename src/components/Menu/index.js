import React from 'react';

import { Link } from 'react-router-dom';

import './index.css'

import TCLogo from '../../assets/img/logo-tc.png';

const Menu = () => (
  <div className='menu'>
    <Link to="/">
      <img src={TCLogo} alt="TCLogo"/>
    </Link>
  </div>
);

export default Menu;
