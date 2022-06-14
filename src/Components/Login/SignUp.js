import React from 'react'
import { Link } from "react-router-dom"

function SignUp() {
    return (
        <div>

            <div style={{
                display: "grid",
                width: "300px",
                margin: "1rem auto",
                padding: "1rem",
                background: "#F7F8F8",
                textAlign: "center",
            }}>
                <h1 style={{ color: "#21d1cb", margin: "2rem" }}>Sign up</h1>

                <input style={{ margin: ".5rem", height: "1.5rem", fontSize: "1rem" }} type="firstname" placeholder="First Name" />
                <input style={{ margin: ".5rem", height: "1.5rem", fontSize: "1rem" }} type="lastname" placeholder="Last Name" />
                <input style={{ margin: ".5rem", height: "1.5rem", fontSize: "1rem" }} type="email" placeholder="Email" />
                <input style={{ margin: ".5rem", height: "1.5rem", fontSize: "1rem" }} type="password" placeholder="Password" />
                <button style={{ margin: ".5rem", fontSize: "1rem", padding: ".5rem", borderRadius: "2rem", background: "#21d1cb" }}>Sign up</button>
                <h4>or</h4>
                <button style={{ margin: ".5rem", fontSize: "1rem", padding: ".5rem", borderRadius: "2rem", background: "#21d1cb" }}><Link to="/login">Login</Link></button>

            </div>
        </div>
    )
}

export default SignUp