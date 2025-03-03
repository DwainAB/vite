export default function Dish ({name, img, price}){
    return(
        <div className="container-dish">
            <img src={img} alt="" />
            <div className="information-dish">
                <h2>{name}</h2>
                <p>{price}</p>
            </div>
        </div>
    )
}