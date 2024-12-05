export default function Product(props) {
    return (
        <div>
            <img src={props.link} alt="Product"/>
            <h2>{props.name}</h2>
            <p className="color-prop">{props.color}</p>
            <p className="price-prop">{props.price}</p>
        </div>
    );
}
