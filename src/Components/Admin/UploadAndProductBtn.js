import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';


export default function UploadAndProductBtn({url}) {

    return (
        <div style={{
            display:"flex",
            width:"204px",
            textAlign:"center",
            margin:"1rem auto",
            background:"#F7F8F8"
        }}>

            <ul style={{listStyle:"none",display:"flex"}}>

                <li style={{
                    fontSize:"1.25rem", 
                    // border:"ridge", 
                    padding:".5rem 1rem", 
                    borderRadius:"2rem",
                    background:"#21d1cb"
                }}><Link to={`${url}/upload`}>Upload</Link></li>
                
                <li style={{
                    fontSize:"1.25rem", 
                    // border:"ridge", 
                    padding:".5rem 1rem", 
                    borderRadius:"2rem",
                    background:"#21d1cb"
                }}><Link to={`${url}/products`}>Products</Link></li>
            
            </ul>
            
        </div>
    )
}
