import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase';



function Login({setUser}) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            let user = result.user;
            let newUser = {
                name:user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem("user",JSON.stringify(newUser))
            setUser(newUser)
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <Container>
            <Content>
                <AmazonLogo src={"https://i.imgur.com/7I9Was5.png"} />
                    <h1>Sign into Amazon</h1>
                <LoginButton onClick = {signIn}>
                    Sign in with Google
                </LoginButton>

            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #f8f8f8;
    display:grid;
    place-items:center;
`

const Content = styled.div`
    padding:100px;
    background-color:rgba(0,0,0,0.3);
    border-radius:5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`

const AmazonLogo = styled.img`
    height:100px;
    margin-bottom:40px;
`

const LoginButton = styled.button`
    margin-top:50px;
    background-color: #f0c14b;
    height:40px;
    border:2px solid #a88734;
    border-radius: 4px;
    pading:4px 8px;
    cursor:pointer;
`