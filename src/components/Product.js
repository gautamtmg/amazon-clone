import React from 'react'
import styled from 'styled-components';
import {db} from '../firebase';


function Product({title, price ,rating, image, id}) {

    const addToCart = () => {
        console.log(id)
        const cartItem =  db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc) => {
            console.log(doc)
            if(doc.exists){
                cartItem.update({
                    quantity:doc.data().quantity+1
                })
            }else{
                db.collection("cartItems").doc(id).set({
                    name:title,
                    image:image,
                    price:price,
                    quantity:1
                })
            }
        })
    }
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating).fill().map( rating => <span>*</span>)
                }
            </Rating>
            <Image src={image} />
            <AddToCart onClick={addToCart}>
                Add to Cart
            </AddToCart>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color:white;
    z-index:100;
    height:300px;
    flex-grow:1;
    padding:20px;
    margin:10px;
    max-height:400px;
    display:flex;
    flex-direction:column;
`

const Title = styled.span``
const Price = styled.span`
    font-weight:500;
    margin-top:3px;
`
const Rating = styled.div``
const Image = styled.img`
    max-height:200px;
    object-fit:contain;
`
const AddToCart = styled.button`
    width:100px;
    background-color: #f0c14b;
    border:1px solid #a88734;
    border-radius:2px;
    height:30px;
    margin:0 auto;
    margin-top:12px;
    cursor:pointer;
`