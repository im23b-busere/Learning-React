import Product from './Product.jsx';

export default function ProductList() {
    return (
        <>
            <h1>Product List</h1>
            <ul className="product-list">
                <li>
                    <Product
                        link="https://picsum.photos/300"
                        name="Product 1"
                        color="Natural"
                        price="75$"/>
                </li>
                <li>
                    <Product link="https://picsum.photos/300"
                             name="Product 2"
                             color="Black"
                             price="70$"/>
                </li>
                <li>
                    <Product link="https://picsum.photos/300"
                             name="Product 3"
                             color="Light Brown"
                             price="27$"/>
                </li>
                <li>
                    <Product link="https://picsum.photos/300"
                            name="Product 4"
                            color="Walnut"
                            price="200$"/>
                </li>
            </ul>
        </>
    );
}

