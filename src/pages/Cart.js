import React from 'react'
import styled from 'styled-components';
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal';


function Cart({cartItems}) {

    const  getTotalPrice = () => {
        let total = 0;

        cartItems.forEach( item => {
            total += item.product.price * item.product.quantity
        })
        return total
    }

    const getTotalItem = () => {
       
        let count = 0
        // loop through all cartItems.
        cartItems.forEach((item => {
            count += item.product.quantity
        }))
        return count

        
    }

    return (
        <Container>

            <CartItems cartItems = {cartItems} />

            <CartTotal totalPrice ={getTotalPrice()} totalItems = {getTotalItem()}/>
            
        </Container>
    )
}

export default Cart


const Container = styled.div`
    padding: 14px 18px 0px 18px;
    display:flex;
    align-items:flex-start;
`