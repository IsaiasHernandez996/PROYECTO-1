import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
 
  const [userName, setUserName] = useState('');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { isAuthenticated, user } = useAuth0();

  

  useEffect(() => {
    if (isAuthenticated) {
      setUserName(user.name);
    }
  }, [isAuthenticated, user]);

 

  return (
    <>
       <header className='header'>

     
      <nav className='navbar'>
      <div class = "Menu Navbar">
       <a href="#" class="Logo"> Logo </a>
       <input type="checkbox" id="menu"/>
       <label for="Menu">
       <nav class="navbar">
     
        <ul>
        <li><a href = "#" >Inicio</a></li>
        <li><a href = "#" >Servicios</a></li>
        <li><a href = "#" >Productos</a></li>
        <li><a href = "#" >Contacto</a></li>

        <li><a href = '#' >Iniciar Sesion</a>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
         </Link>
        </li>
        <li><a href = "#" >Registro</a></li>
        </ul>
       </nav>
    </label>
    </div>
      </nav>
      <div class="header-content container">
     <div class="header-txt ">
      <div class="butons">
 <h1>Compra tu <span>Juego</span> Favorito aqui</h1>
  </div>
 <a href="#" class="btn-1">Informacion</a>
  <a href="#" class="btn-1">Juegos</a>

      </div>
      </div>
  </header>    
    <main class="product-container">
    <h2>Todos los juegos</h2>
    <div class="product-content">
        <div class="product-1">
            <div class="img-1">
            </div>
            
            <div class="product-txt">
                <h3>Party Animals</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
            </div>

        </div>

<div class="product-1">
            <div class="img-2">
            </div>            
            <div class="product-txt">
                <h3>Forza Horizon</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>

        </div>

<div class="product-1">
             <div class="img-3">
           
             </div>
            <div class="product-txt">
                <h3>Read Dead Redemption ll </h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>

        </div>
            <div class="product-1">
                <div class="img-4">
                    
                </div>
            
            <div class="product-txt">
                <h3>Spiderman 2</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>

        </div>

        <div class="product-1">
            <div class="img-5">
             
            </div>
            
            <div class="product-txt">
                <h3>PUBG battlegrounds</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>


        </div>
        
            <div class="product-1">
                <div  class="img-6">
                 
                </div>
            
            <div class="product-txt">
                <h3>Cyberpunk</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>


        </div>

            <div class="product-1">
                <div class="img-7">
                    
                </div>
           
            <div class="product-txt">
                <h3>EA Sports FC 24</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>


        </div>

            <div class="product-1">
                <div class="img-8">
            
                </div>
            
            <div class="product-txt">
                <h3>Mortal Kombat l</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>


        </div>

            <div class="product-1">
                <div class="img-9">
                    
                </div>
            <div class="product-txt">
                <h3>Grand Theft Auto V</h3>
                <div class="price">
                <p>$500</p>
                <a href="#" class="btn-2">Comprar</a>
                </div>
   
            </div>
        </div>
    </div>
    
        
    </main>
    <section class="contact container">
    <div class="contact-content">
        <h3>Subscribete a nuestro blog</h3>
      <form> 
       
      </form>
    </div>

</section>
<footer class="footer-container">
    <div class="link">
    <a href="#" class="Logo">Logo</a>
    </div>

    <div class="link">
     <ul>
        <li> <a href="#">Inicio</a></li>
        <li> <a href="#">Sevicios</a></li>
        <li> <a href="#">Productos</a></li>
        <li> <a href="#">Contacto</a></li>
     </ul>
    </div>

</footer>
           {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}

          {isAuthenticated && (
            <p className="welcome-message">¡Bienvenid@, {user.name}!</p>
          )}
    </>
  );
}

export default Navbar;