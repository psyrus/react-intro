import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentButton } from "./payment-form.styles";

import { constructEndpoint } from "../../utils/functions/azure-functions.utils";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const user = useSelector(selectCurrentUser);
    const cartItems = useSelector(selectCartItems);

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        // Need to enable cors on the Azure Functionapp
        const response = await fetch(constructEndpoint('StripePaymentIntent'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: cartTotal * 100 }),
        }
        ).then( res => res.json());

        const paymentResult = await stripe.confirmCardPayment(response.paymentIntent.client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user ? user.displayName : 'Guest'
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else if(paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment successful');
        }
    };
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessingPayment}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;