import "./navbar.scss"


import React, { useEffect, useState } from 'react';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth )
    }, [])

  return <div className="nav">
                <div className="container">
                    <div className="row_logo">
                        <h2> INSERT LOGO</h2>
                    </div>
                    
                    <div className="row_pagination">
                    {(toggleMenu || screenWidth > 1250 ) && (
                        <ul>
                            
                                <li>
                                   <a href="/">Home </a> 
                                </li>
                                <li>
                                   <a href="#slider">Clientes</a> 
                                </li>
                                <li>
                                   <a href="#projetos">Projetos</a> 
                                </li>
                                <li>
                                  <a href="#about">Sobre</a>  
                                </li>
                            
                        </ul>
                        )}
                    </div>



                    <div className="mobile">
                        <button onClick={toggleNav}>
                            <img src="assets/images/menu-aberto.png" alt="" />
                        </button>
                    
                    </div>
                    <script src="./mobile.js"></script>
                </div>


        </div>;
}
