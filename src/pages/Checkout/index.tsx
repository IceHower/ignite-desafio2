import { Container, SectionItems, CheckoutContainer, PaymentMethodsContainer } from "./styles"
import logoSeller from "../../assets/images/logo_seller.png"
import { useCart } from "../../hooks/useCart"
import { formatPrice } from '../../util/format';
import { PaymentMethodButton } from "../../components/PaymentMethodButton";
import { useState } from "react";
export function Checkout() {
    const userColor =  "#EBA2A2";
    const [paymentMethodSection, setPayementMethodSection] = useState("bankSlip");
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
                                    <p>Qnt. {item.amount}</p>
                                </div>
                            </section>
                        </li>
                    ))}
                </ul>
            </SectionItems>
            <CheckoutContainer>
                <PaymentMethodsContainer>
                    <PaymentMethodButton type="bankSlip" onClick={() => setPayementMethodSection("bankSlip")}/>
                    <PaymentMethodButton type="creditCard" onClick={() => setPayementMethodSection("creditCard")}/>
                    <PaymentMethodButton type="pix" onClick={() => setPayementMethodSection("pix")}/>
                </PaymentMethodsContainer>
                {paymentMethodSection === "bankSlip" && (
                    <p>BOLETO</p>
                )}
                {paymentMethodSection === "creditCard" && (
                    <p>CARTAO</p>
                )}
                {paymentMethodSection === "pix" && (
                    <p>PIX</p>
                )}
            </CheckoutContainer>
        </Container>
    )
}