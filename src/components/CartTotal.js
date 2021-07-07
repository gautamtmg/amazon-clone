import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format'



function CartTotal({totalPrice, totalItems}) {

    
    return (
        <Container>
            <Subtotal>Subtotal ( {totalItems } items ): 
            <NumberFormat value = {totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'}>

            </NumberFormat>
            </Subtotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    background-color:white;
    flex:.2;
    padding:20px;

`

const Subtotal = styled.h2`
    margin-bottom:16px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width:100%;
    border:2px solid #a88734;
    border-radius:4px;
    cursor:pointer;
    font-size:16px;
    padding: 4px 8px;

    :hover{
        background-color: #ddb347;
    }
`