import { HtmlHTMLAttributes } from "react";
import { ButtonContainer } from "./style";
import { BsCreditCard } from "react-icons/bs";
import { ImBarcode } from "react-icons/im";
import { MdPix } from "react-icons/md";
interface PaymentMethodButtonProps extends HtmlHTMLAttributes<HTMLButtonElement>{
    type: "creditCard" | "bankSlip" | "pix";
    isSelected: boolean;
    selectedColor?: string;
}

export function PaymentMethodButton({ type, isSelected, selectedColor, ...rest }: PaymentMethodButtonProps) {
    function formatType(type: "creditCard" | "bankSlip" | "pix") {
        const types = {
            "creditCard": "Cartão",
            "bankSlip": "Boleto",
            "pix": "Pix"
        }
        return types[type];
    }
    function getIcon(type: "creditCard" | "bankSlip" | "pix") {
        const types = {
            "creditCard": <BsCreditCard />,
            "bankSlip": <ImBarcode />,
            "pix": <MdPix />
        }
        return types[type];
    }
    return (
        <ButtonContainer 
            isSelected={isSelected} 
            selectedColor={selectedColor} 
            {...rest}
        >
            <div>
                {getIcon(type)}
                {formatType(type)}
            </div>
        </ButtonContainer>
    )
}