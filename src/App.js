import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayOut from "./layOut/LayOut";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import DashBoard from "./pages/dashBoard/DashBoard";
import NotFound from "./components/notFound/NotFound";


function App() {


  const routes = createBrowserRouter([
    {path: '/' , element : <LayOut/> , children: [
      {index :true ,element :  <Home/>},
      {path : "/productDetails" , element : <ProductDetails/> },
      {path : "/dashBoard" , element : <DashBoard/> }
    ]},
    {path:"*" , element : <NotFound/>}
  ])
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  );
}

export default App;
