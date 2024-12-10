import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar";
import Product_Card from "./components/Product_card";


// Navbar
// --->Logo
// --->Men women kids in list



const App = () =>{
    return(
        <>
        <Navbar/>
        <Product_Card/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)