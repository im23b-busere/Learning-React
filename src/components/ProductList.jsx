import Product from './Product.jsx';

export default function ProductList() {
    return (
        <>
            <h1 className="mt-4 mb-4">Product List</h1>
            <ul className="product-list flex justify-between list-none text-center">
                <li className="border border-gray-500 p-2 shadow">
                    <Product
                        link="https://picsum.photos/300"
                        name="Product 1"
                        color="Natural"
                        price="75$"/>
                </li>
                <li className="border border-gray-500 p-2 shadow">
                    <Product link="https://picsum.photos/300"
                             name="Product 2"
                             color="Black"
                             price="70$"/>
                </li>
                <li className="border border-gray-500 p-2 shadow">
                    <Product link="https://picsum.photos/300"
                             name="Product 3"
                             color="Light Brown"
                             price="27$"/>
                </li>
                <li className="border border-gray-500 p-2 shadow">
                    <Product link="https://picsum.photos/300"
                            name="Product 4"
                            color="Walnut"
                            price="200$"/>
                </li>
            </ul>
        </>
    );
}