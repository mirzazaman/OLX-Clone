import UploadAndProductBtn from "./UploadAndProductBtn";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import Upload from "./UploadAndProductComponent/Upload";
import Products from "./UploadAndProductComponent/Products";
import Header from "../../CommonComponents/header/Header";
import { useEffect, useState } from "react";
import NavBar from "../../CommonComponents/navBar/NavBar"

function Admin() {
    // const [state, setstate] = useState(true)
    const{path, url} = useRouteMatch()

    return(
    <>
        <Header />

        <div style={{
            background:"#F7F8F8",
        }}>
        <center><div style={{marginTop:"2rem"}}><h1 style={{color:"#21d1cb"}}>Admin Panel</h1></div></center>

        <UploadAndProductBtn url={url}/>

        </div>

        <Switch>

        <Route path={`${path}/upload`} component={Upload}/>
        <Route path={`${path}/products`} component={Products}/>

        </Switch>

    </>
    )
}

export default Admin;