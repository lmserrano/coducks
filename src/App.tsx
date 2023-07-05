import { useState } from "react";
import { Header } from "./components/header";
import "./tailwind.css";
import type { Product, Cart, User, CartItem } from "./types";
import { ProductPage } from "./components/product-page";

function App({ product, user }: { product: Product; user: User }) {
  const [cart, setCart] = useState<Cart>([]);

  function addToCart(newItem: CartItem) {
    const isSameItem = (i: CartItem) =>
      i.product.id === newItem.product.id && i.size === newItem.size;
    const alreadyInCart = cart.filter(isSameItem).length > 0;
    if (alreadyInCart) {
      setCart(
        cart.map((i) =>
          isSameItem(i) ? { ...i, quantity: i.quantity + newItem.quantity } : i
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  }

  return (
    <div>
      <Header cart={cart} user={user} />

      <ProductPage product={product} addToCart={addToCart} />

      <footer className="text-center text-sm p-5">
        Made with ♥ in&nbsp;
        <a href="https://codux.com">Codux</a>
        &nbsp;with&nbsp;
        <a href="https://radix-ui.com">RadixUI</a>
        &nbsp;and&nbsp;
        <a href="https://tailwindcss.com">TailwindCSS</a>
      </footer>
    </div>
  );
}

export default App;
