import { useState } from "react";
import MainInput from "../../components/inputs/MainInput";
import "./dashBoardStyle.scss";


const DashBoard = () => {
  const [products, setProducts] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: null,
  });

  const handelsubmit = () => {
    const currentProductsList = JSON.parse(localStorage.getItem("productList"));
    products.productId = Math.random();
    if (currentProductsList) {
      currentProductsList.push(products);
      localStorage.setItem("productList", JSON.stringify(currentProductsList));
    } else {
      let arr = [];
      arr.push(products);
      localStorage.setItem("productList", JSON.stringify(arr));
    }
    console.log(products);
    console.log("done");
  };

  return (
    <>
      <div className="dashBoard">
        <div className="container">
          <div className="addProductsContainer">
            <h2>Add Products</h2>
            <form>
              <MainInput
                type="text"
                name="productName"
                id="productName"
                labelName="Product Name"
                handelChange={(e) =>
                  setProducts({ ...products, productName: e.target.value })
                }
              />
              <MainInput
                type="number"
                name="productPrice"
                id="productPrice"
                labelName="Product Price"
                handelChange={(e) =>
                  setProducts({ ...products, productPrice: e.target.value })
                }
              />
              <MainInput
                type="text"
                name="productDescription"
                id="productDescription"
                labelName="Product Description"
                handelChange={(e) =>
                  setProducts({
                    ...products,
                    productDescription: e.target.value,
                  })
                }
              />
              <MainInput
                type="file"
                name="productImage"
                id="productImage"
                labelName="Product Image"
                handelChange={(e) =>
                  setProducts({ ...products, productImage: e.target.files[0].name })
                }
              />
            </form>

            <button onClick={handelsubmit}>click</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
