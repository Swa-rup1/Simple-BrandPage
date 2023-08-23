import React, { useState } from 'react';


const Navigation = () => {

    //    Calling Component
return (
            
            <nav>
                <div className="logo">
                        
                     <img src="/images/log.png"  id="logo" alt="logo" /> 
                </div>
    
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Services</li>
                    <li href="#">Portfolio</li>
                    <li href="#">Contact</li>
                </ul>
    
                <button id="login">Login</button>

                
            </nav>
            
);
};
    
    export default Navigation;