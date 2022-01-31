import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import getAuthToken from "../utils/getToken";
import axios from "axios";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    setAuthorized(getAuthToken())
    if(localStorage.getItem('loggedUser')){
      axios.get('http://localhost:8082/api/v1/users/'+localStorage.getItem('loggedUser')+''
      ).then(({data}) => {
        setIsAdmin(!data.studentAccount)
        console.log(data)
      })
    }
    //setIsAdmin(getPermission())
    console.log(isAdmin)
    console.log(authorized)
  },[])

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FutureLIB
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Página inicial
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nossos Serviços
              </Link>
            </li>
            {/*<li className='nav-item'>*/}
            {/*  <Link*/}
            {/*    to='/products'*/}
            {/*    className='nav-links'*/}
            {/*    onClick={closeMobileMenu}*/}
            {/*  >*/}
            {/*    Products*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {!isAdmin && authorized && <li>
              <Link
                  to='/services-student'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                Área do estudante
              </Link>
            </li>}
            {isAdmin && authorized && <li>
              <Link
                  to='/admin'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
              >
                Painel administrador
              </Link>
              <Link
                  to='/admin'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                Painel administrador
              </Link>
            </li>}
            {!authorized && <li>
              <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
              >
                Entrar
              </Link>
            </li>}
            {authorized && <li>
              <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
              >
                Sair
              </Link>
            </li>}
          </ul>
          {!authorized && button && <Button buttonStyle='btn--outline'>Entrar</Button>}
          {authorized && button &&
            <Button buttonStyle='btn--outline'>Sair</Button>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
