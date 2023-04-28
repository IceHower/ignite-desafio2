import { Container, SectionItems, CheckoutContainer, PaymentMethodsContainer, Divider } from "./styles"
import logoSeller from "../../assets/images/logo_seller.png"
import { useCart } from "../../hooks/useCart"
import { formatPrice } from '../../util/format';
import { PaymentMethodButton } from "../../components/PaymentMethodButton";
import { useState } from "react";
import InputComponent from "../../components/input";
import Button from "../../components/button";
export function Checkout() {
    const userColor =  "#0C89BB";
    const [paymentMethodSection, setPayementMethodSection] = useState("bankSlip");
    const [hasFinishOrder, setHasFinishOrder] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleSubmit = () => {
        try {

        } catch {
            
        } finally {

        }
    }
    return(
        <Container>
            <SectionItems backgroundColor={userColor}>
                <section>
                    <img src={logoSeller} />
                    <strong>Acme</strong>
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
                    <PaymentMethodButton 
                        isSelected={paymentMethodSection === "bankSlip"} 
                        selectedColor={userColor}
                        type="bankSlip" 
                        onClick={() => setPayementMethodSection("bankSlip")}
                    />
                    <PaymentMethodButton 
                        isSelected={paymentMethodSection === "creditCard"} 
                        selectedColor={userColor}
                        type="creditCard" 
                        onClick={() => setPayementMethodSection("creditCard")}
                    />
                    <PaymentMethodButton 
                        isSelected={paymentMethodSection === "pix"} 
                        selectedColor={userColor}
                        type="pix" 
                        onClick={() => setPayementMethodSection("pix")}
                    />
                </PaymentMethodsContainer>
                <Divider />
                {paymentMethodSection === "bankSlip" && (
                    <form>
                        <InputComponent 
                            onChange={() => {}}
                            label="CPF"
                            filledColor={userColor}
                        />
                        <InputComponent 
                            onChange={() => {}}
                            label="Nome"
                            filledColor={userColor}
                        />
                        <Button 
                            type="button" 
                            isLoading={isLoading} 
                            backgroundColor={userColor} 
                            onClick={() => setIsLoading(true)}
                        >
                            Finalizar pagamento
                        </Button>
                    </form>
                )}
                {paymentMethodSection === "creditCard" && (
                    <form>
                        <InputComponent 
                            onChange={() => {}}
                            label="Email"
                            filledColor={userColor}
                        />
                        <InputComponent 
                            onChange={() => {}}
                            label="Número do cartao"
                            filledColor={userColor}
                        />
                        <InputComponent 
                            onChange={() => {}}
                            label="Nome no cartao"
                            filledColor={userColor}
                        />
                        <InputComponent 
                            onChange={() => {}}
                            label="País"
                            filledColor={userColor}
                        />
                        <Button 
                            type="button" 
                            isLoading={isLoading} 
                            backgroundColor={userColor} 
                            onClick={() => setIsLoading(true)}
                        >
                            Finalizar pagamento
                        </Button>
                    </form>
                )}
                {paymentMethodSection === "pix" && (
                    <form>
                        <InputComponent 
                            onChange={() => {}}
                            label="CPF"
                            filledColor={userColor}
                        />
                        <InputComponent 
                            onChange={() => {}}
                            label="Nome"
                            filledColor={userColor}
                        />
                        <Button 
                            type="button" 
                            isLoading={isLoading} 
                            backgroundColor={userColor} 
                            onClick={() => setIsLoading(true)}
                        >
                            Finalizar pagamento
                        </Button>
                    </form>
                )}
            </CheckoutContainer>
        </Container>
    )
}