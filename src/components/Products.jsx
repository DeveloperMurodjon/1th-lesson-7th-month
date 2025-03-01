import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";

function Products({ onEdit }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    return (
        <div>
            <h2>Mahsulotlar Ro'yxati</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Nomi</th>
                        <th>Narxi ($)</th>
                        <th>Miqdori</th>
                        <th>Amallar</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                            <td>
                                <button onClick={() => onEdit(p)}>Edit</button>
                                <button onClick={() => dispatch(removeProduct(p.id))}>Remove</button>
                                <button onClick={() => dispatch(addToCart(p))}>Add To Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
