import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProductAction } from "../../Store/actions/ProductAction";
import Header from "../../CommonComponents/header/Header";
import backImage from "../../Assets/backImage.jpg";
import NavBar from "../../CommonComponents/navBar/NavBar";

function Home() {
  const [state, setstate] = useState(true)

  const dispatch = useDispatch();
  const products = useSelector(store => store.ProductReducer.products);
  const ctaHandler = () => {
    dispatch(AllProductAction());
  }

  useEffect(() => {
    if (state){
      ctaHandler();
      setstate(false);
    }
  }, [])

  return (
    <div>

      <Header />

      <NavBar />

      <div style={{
        display: "block",
        width: "100%",
        height: "15rem",
        background: `url(${backImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}></div>


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

    </div>
  );
}

export default Home;