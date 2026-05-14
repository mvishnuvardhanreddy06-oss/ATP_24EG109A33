function Product(props){
    //state
const {productObj}=props; 
//return a react element
 return (
    <div className="rounded-3xl shadow-amber-900 m-6 bg-amber-300">
        <h2 className="text-3xl p-3">{productObj.title}</h2>
        <h3 className="text-2xl">{productObj.price}</h3>
        <p>{productObj.description}</p>
    </div>
 )
}
export default Product