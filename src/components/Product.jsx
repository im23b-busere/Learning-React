export default function Product(props) {
    const product = props.product
    return (
        <div className="w-1/4 p-5 border border-gray-300 rounded-lg shadow-lg">
            <img src={product.thumbnail} alt={product.name} />
            <h2 className="font-bold">{product.title}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="font-bold">{product.price}</p>
        </div>
    );
}