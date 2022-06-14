import React from 'react'
import Header from '../../CommonComponents/header/Header';

function NotFound() {
    return (
        <>
        <Header/>

        <h1 style={{
        background:"#F7F8F8",
        marginTop:"20px"
        }}>
           <center>404 Not Found</center>
        </h1>
        </>
    )
}

export default NotFound;