import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProductAction } from "../../../Store/actions/ProductAction";
import NavBar from "../../../CommonComponents/navBar/NavBar"

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(store => store.ProductReducer.products);


  const ctaHandler = () => {
    dispatch(AllProductAction());
  }

  useEffect(() => {
    ctaHandler()
  }, [])

  return (
    <>

      <NavBar/>

      <center>

        {
          products.map((product) => {
            return (
              <>
                <div style={{
                  display: "inline-flex",
                  background: "#F7F8F8",
                }}>
                  <div style={{
                    border: "ridge",
                    display: "grid",
                    width: "250px",
                    margin: "1rem",
                    borderRadius: "1rem",
                    textAlign: "center",
                  }}>


                    <button style={{
                      margin: "5px 80px",
                      padding: "5px 0",
                      border: "none",
                      background: "red",
                      borderRadius: "5rem",
                      cursor: "pointer"
                    }}>Delete</button>


                    <center>
                      <img style={{
                        margin: ".5rem",
                        width: "200px",
                        height: "200px",

                      }} src={product.Image} />
                    </center>
                    <h2><b>{`Rs ${product.Price}`}</b></h2>
                    <h3><b>{`Model: ${product.Model}`}</b></h3>

                  </div>
                </div>
              </>
            )
          })
        }

      </center>

    </>
  );
}

export default Home;