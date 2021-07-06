import React from 'react'
import styled from 'styled-components';


function Product() {
    return (
        <Container>
            <Title>
                Ipad Pro
            </Title>
            <Price>
                $399
            </Price>
            <Rating>

            </Rating>
            <Image src="https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UY218_.jpg" />
            <AddToCart>
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
`