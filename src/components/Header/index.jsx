import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.css';

class Header extends Component {

    render(){
        return (
           <header className="component-header">
               😸 Emoji Searach 😸
               <nav>
                   <ul>
                       <li>
                           <Link to='/'> Search </Link>
                       </li>
                       <li>
                           <Link to='/likes'> Likes </Link>
                       </li>
                   </ul>
               </nav>
           </header>
        )
    }
}

export default Header;
