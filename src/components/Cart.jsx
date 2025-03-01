import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
    const dispatch = useDispatch();
    const { cartItems, totalPrice } = useSelector((state) => state.cart);

    return (
        <div>
            <h2>Savatcha</h2>
            {cartItems.length === 0 ? (
                <p>Savatcha bo‘sh</p>
            ) : (
                <>
                    <table border="1" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Nomi</th>
                                <th>Narxi ($)</th>
                                <th>Miqdori</th>
                                <th>Jami</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Umumiy Narx: ${totalPrice}</h3>
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </>
            )}
        </div>
    );
}

export default Cart;
