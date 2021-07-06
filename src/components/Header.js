import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link } from 'react-router-dom';


function Header() {
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">

                    <img src={"https://i.imgur.com/7I9Was5.png"} alt="" />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Selet your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />

                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Gautam</OptionLineOne>
                    <OptionLineTwo> Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
            </HeaderNavItems>

            <HeaderOptionCart>
                <Link to="/cart">
                    <ShoppingBasketIcon />
                    <CartCount>4</CartCount>
                </Link>

            </HeaderOptionCart>


        </Container>
    )
}

export default Header

const Container = styled.div`
    height:60px;
    background-color:#0f1111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white;

`

const HeaderLogo = styled.div`
    img{
        width:100px;
        margin-left:11px;
        bacground-color:green;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left:9px;
    display:flex;
    align-items:center;

`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
    font-weight: 700;

`

const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    height:40px;
    border-radius:4px;
    overflow:hidden;
    margin-left:4px;
    background-color:white;
    :focus-within{
        box-shadow:0 0 0 3px #f90;
    }

`

const HeaderSearchInput = styled.input`
    flex-grow:1;
    border:none;
    :focus{
        outline:none;

    }
`
const HeaderSearchIconContainer = styled.div`
    background-color:#febd69;
    width:45px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
`
const HeaderNavItems = styled.div`
    display:flex;
`

const HeaderOption = styled.div`
    padding: 10px 9px;
    
`

const HeaderOptionCart = styled.div`
    display:flex;
    align-items:center;
    padding-right:9px;
    a{
        display:flex;
        align-items:center;
        padding-left:9px;
        color:white;
        text-decoration:none;
    }

`
const CartCount = styled.div`

`