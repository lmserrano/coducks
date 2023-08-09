import { RatingAverage } from "./reviews";
import type { CartItem, Product } from "../types";
import * as Accordion from '@radix-ui/react-accordion';

export const ProductInfo = ({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (item: CartItem) => void;
}) => {
  const size = product.sizes[0];
  const item = { product, size: size, quantity: 1 };

  return (
    <div className="flex flex-col gap-5 p-5">
      <h2 className="text-3xl flex justify-between">
        <span className="w-1/2">{product.name}</span>
        <span>${product.price}</span>
      </h2>
      <RatingAverage reviews={product.reviews} />

      <div className="">
        <p>Size {size}</p>
        <button className="" disabled={!size} onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>

      <InfoAccordion product={product} />
    </div>
  );
};

const InfoAccordion = ({product}: {product: Product}) => {
  <Accordion.Root className="" type"multiple" defaultValue="item-1" collapsible>

  return <p>{product.description}</p>
  </Accordion.Root>
}