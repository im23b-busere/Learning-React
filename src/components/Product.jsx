export default function Product(props) {
    return (
        <div>
            <img src={props.link} alt="Product"/>
            <h2>{props.name}</h2>
            <p className="color-prop text-gray-500">{props.color}</p>
            <p className="price-prop font-bold">{props.price}</p>
        </div>
    );
}