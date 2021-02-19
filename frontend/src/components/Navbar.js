import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        
        <div className="main1">
            <Link to="/"> <h2>Management system</h2>
                       </Link>
            
            
                <ul className="items">
                    <li>
                       <Link to="/">Home
                       </Link>
                    </li>

                    <li>
                      <Link to="/about"> About
                      </Link>
                    </li>

                </ul>

        </div>
        
    )
}

export default Navbar;
