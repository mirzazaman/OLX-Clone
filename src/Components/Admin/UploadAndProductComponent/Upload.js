import React from 'react'

export default function Upload() {
    return (
        <>

            <div style={{
                display: "grid",
                width: "300px",
                margin: "1rem auto",
                padding: "1rem",
                textAlign: "center",
                background: "#F7F8F8",
                // border:"ridge"
            }}>
                <select style={{ margin: ".7rem", height: "1.5rem", fontSize: "1rem" }}>
                    <option>Category</option>
                    <option>Mobile Phones</option>
                    <option>Cars</option>
                    <option>Motorcycles</option>
                    <option>PCs</option>
                    <option>Glasses</option>
                </select>

                <input style={{ margin: ".7rem", height: "1.5rem", fontSize: "1rem" }} type="lastname" placeholder="Model" />
                <input style={{ margin: ".7rem", height: "1.5rem", fontSize: "1rem" }} type="lastname" placeholder="Price" />

                <input style={{ margin: ".7rem", fontSize: "1rem", padding: ".5rem", borderRadius: "2rem", background: "#21d1cb" }} type="file" id="img" name="img" accept="image/*" />
                <button style={{ margin: ".7rem", fontSize: "1rem", padding: ".5rem", borderRadius: "2rem", background: "#21d1cb" }} type="submti">Add</button>

            </div>

        </>
    )
};