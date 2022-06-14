import React from 'react'
import {useNavBar} from "./useNavBar";

function NavBar() {

    const [all, mobilePhone, car, motorCycle, pc, glasses] = useNavBar();

    return (
    <div style={{
        background:"#F7F8F8",
    }}>
        <ul style={{display:"inline-flex", listStyle:"none", margin:".5rem"}}>
            
            <li style={{background:"darkgrey", padding:".5rem", color:"#002f34"}}><b>Categories</b></li>
            
            <li onClick={all} style={{margin:".5rem", cursor:"pointer"}}><b>All</b></li>
            
            <li onClick={mobilePhone} style={{margin:".5rem", cursor:"pointer"}}><b>Mobile Phones</b></li>
            
            <li onClick={car} style={{margin:".5rem", cursor:"pointer"}}><b>Cars</b></li>
            
            <li onClick={motorCycle} style={{margin:".5rem", cursor:"pointer"}}><b>Motorcycles</b></li>
            
            <li onClick={pc} style={{margin:".5rem", cursor:"pointer"}}><b>PCs</b></li>
            
            <li onClick={glasses} style={{margin:".5rem", cursor:"pointer"}}><b>Glasses</b></li>
        
        </ul>
    </div>
    )
}

export default NavBar;