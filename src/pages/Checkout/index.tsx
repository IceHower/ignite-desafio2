import { Container, SectionItems, CheckoutContainer } from "./styles"
import logoSeller from "../../assets/images/logo_seller.png"
import { useCart } from "../../hooks/useCart"
import { formatPrice } from '../../util/format';
export function Checkout() {
    const userColor =  "#EBA2A2";
    const { cart } = useCart();
    const cartFormatted = cart.map(product => ({
        ...product,
        subtotal: product.price * product.amount,
        priceFormatted: formatPrice(product.price),
        subtotalFormatted: formatPrice(product.price * product.amount)
    }))
    const total = formatPrice(cartFormatted.reduce((sumTotal, product) => {
        return sumTotal += product.subtotal;
    }, 0))
    return(
        <Container>
            <SectionItems backgroundColor={userColor}>
                <section>
                    <img src={logoSeller} />
                    <strong>Nome Seller</strong>
                </section>
                <div>
                    <p>Total</p>
                    <strong>{total}</strong>
                </div>
                <ul>
                    {cart?.map(item => (
                        <li>
                            <img src={item.image} />
                            <section>
                                <div>
                                    <span>
                                        <p>{item.title}</p>
                                        <p>{formatPrice(item.price)}</p>
                                    </span>
                                    <p>{item.amount}</p>
                                </div>
                            </section>
                        </li>
                    ))}
                </ul>
            </SectionItems>
            <CheckoutContainer>
                        a
            </CheckoutContainer>
        </Container>
    )
}