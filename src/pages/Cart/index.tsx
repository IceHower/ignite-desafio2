import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

 const cartFormatted = cart.map(product => ({
   ...product,
   subtotal: product.price * product.amount,
   priceFormatted: formatPrice(product.price),
   subtotalFormatted: formatPrice(product.price * product.amount)
 }))
  const total = formatPrice(cartFormatted.reduce((sumTotal, product) => {
    return sumTotal += product.subtotal;
  }, 0))

  function handleProductIncrement(product: Product) {
    const data = { 
      productId: product.id,
      amount: product.amount + 1,
    }
    updateProductAmount(data)
  }

  function handleProductDecrement(product: Product) {
    const data = {
      productId: product.id,
      amount: product.amount -1,
    }
    updateProductAmount(data)
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
        {cartFormatted.map(cartFormattedItem => {
        return(
          <tr key={cartFormattedItem.id} data-testid="product">
              <td>
                <img src={cartFormattedItem.image} alt={cartFormattedItem.title} />
              </td>
              <td>
                <strong>{cartFormattedItem.title}</strong>
                <span>{cartFormattedItem.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={cartFormattedItem.amount <= 1}
                    onClick={() => handleProductDecrement(cartFormattedItem)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={cartFormattedItem.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(cartFormattedItem)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{cartFormattedItem.subtotalFormatted}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(cartFormattedItem.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
              
          </tr>
          )})}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
