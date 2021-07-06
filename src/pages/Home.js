import React from 'react'
import styled from 'styled-components'
import Product from '../components/Product';

 
const Home = () => {
    return (
        <Container>
            
            <Banner>

            </Banner>
            <Content>   
                <Product />
                <Product />
            </Content>
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width:1200px;
    margin:0 auto;

`

const Banner = styled.div`
    background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg');
    min-height: 600px;
    background-position:center;
    background-size:cover;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

`

const Content = styled.div`
    padding:0 10px;
    margin-top:-350px;
    display:flex;
`