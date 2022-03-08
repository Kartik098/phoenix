import React from "react";
import "./navbar.css"



function Navbar() {
    return (
        <>
            <div className="navbar">
               <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/api/add-new-site/">Add new site +</a></li>
               
               </ul>
            <div>
                <button className="myprofile">My profile</button>
            </div>
            </div>
        </>
    );
}

export default Navbar 