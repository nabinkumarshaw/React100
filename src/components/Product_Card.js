import ProductList from "../utils/constant"
import Product from "./Product"
const Product_Card = () =>{
    return(
        <div className="product_card">          
            {
                ProductList.map((item)=>{
                    return(
                        <Product key ={item.id} itsmychoice={item}/>
                    )
                })
            }
            {/* <Product itsmychoice={ProductList[0]}/> */}
            
        </div>
    )
}


export default Product_Card