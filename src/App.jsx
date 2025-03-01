import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "./redux/productsSlice";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Auth from "./components/Auth";

function App() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ id: "", name: "", price: "", quantity: "" });

  const handleAdd = () => {
    if (!product.name || !product.price || !product.quantity) return;
    dispatch(addProduct({ ...product, id: Date.now().toString() }));
    setProduct({ id: "", name: "", price: "", quantity: "" });
  };

  const handleUpdate = () => {
    dispatch(updateProduct(product));
    setProduct({ id: "", name: "", price: "", quantity: "" });
  };

  return (
    <div>
      <h1>Redux Toolkit Shopping App</h1>

      <Auth />

      <div>
        <h2>Mahsulot Qo‘shish / Tahrirlash</h2>
        <input
          type="text"
          placeholder="Nomi"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Narxi"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Miqdori"
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
        {product.id ? (
          <button onClick={handleUpdate}>Yangilash</button>
        ) : (
          <button onClick={handleAdd}>Qo‘shish</button>
        )}
      </div>

      <Products onEdit={setProduct} />
      <Cart />
    </div>
  );
}

export default App;
