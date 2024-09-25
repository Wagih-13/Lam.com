import { useEffect, useState } from "react";
import "./homeStyle.scss";

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const currentProductsList = JSON.parse(localStorage.getItem("productList"));
    setProductList(currentProductsList);
  }, []);
  return (
    <>
      {productList?.map((product , index) => {
        return (
          <>
            <div className="container" key={index }>
              <div className="productCard">
                <img src={require(`../../assets/images/${product.productImage}`)} width={200}  alt="" />
                <h3>{product.productName}</h3>
                <p>{product.productDescription}</p>
                <p>Price: ${product.productPrice}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
