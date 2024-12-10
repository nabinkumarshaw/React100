const Product =(props) =>{
    const {image,title,price,rating}=props.itsmychoice;   //destructuring
    return(
        <div className="product">
        <img src={image}></img>
        <h1>{title}</h1>
        <p>{rating.rate} rating</p>
        <p>price:{price}</p>
        </div>
    )
}

export default Product