import React from 'react'
import styled from 'styled-components';
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal';


function Cart({cartItems}) {
    return (
        <Container>

            <CartItems cartItems = {cartItems} />

            <CartTotal />
            
        </Container>
    )
}

export default Cart


const Container = styled.div`
    padding: 14px 18px 0px 18px;
    display:flex;
`