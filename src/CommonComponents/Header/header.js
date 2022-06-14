import logo from "../../Assets/logo.png";
import SearchBar from "../../MaterialComponents/LocationBar";
import ItemBar from "../../MaterialComponents/ItemBar";
import {Link} from "react-router-dom";

function Header() {
    return(
    <>
        <div style={{
            display: "flex",
            padding: "1rem 0",
            background:"#F7F8F8"

        }}>
            <Link to="/"><img src={logo} style={{width:"48px", height:"48px", margin:"0 1rem"}} /></Link>
            <SearchBar/>
            <ItemBar/>
            <Link to="/login"><h2 style={{textAlign:"center", margin:".5rem 2rem", color:"#002f34", fontSize:"1.596rem", }}>Login</h2></Link>
            <Link to="/signup"><h2 style={{textAlign:"center", margin:".5rem 2rem", color:"#002f34", fontSize:"1.596rem", }}>Sign in</h2></Link>
        </div>

    </>
    )
}

export default Header;