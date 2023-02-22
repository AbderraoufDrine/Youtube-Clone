import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import {auth, provider } from "../firebase"
import {signInWithPopup} from "firebase/auth"

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: calc(100vh - 56px);
 color: black;
`
const Wrapper = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 background-color: offwhite;
 padding: 20px 50px;
 border: 1px solid lightwhite;
 gap: 10px;
 background-color: ;
 width: 25%;
`
const Title = styled.h1`
font-size: 24px;
`

const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`

const Input = styled.input`
border: 1px black solid light;
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
`

const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
color: black;
`



export default function SignIn() {

  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const dispatch = useDispatch()

  const handleLogin = async(e) =>{
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin",{name,password})
      dispatch(loginSuccess(res.data))
    } catch (error) {
      dispatch(loginFailure())
    }
  }

  const handleRegister = async(e) =>{
    try {
      e.preventDefault();
      const res = await axios.post("/auth/signup",{name,email,password})
      console.log(res.data)
    } catch (error) {
      
    }
  }
  
  const signInWithGoogle = async()=>{
    dispatch(loginStart());
    signInWithPopup(auth,provider).then((result)=>{
      axios.post("/auth/google",{
        name: result.user.displayName,
        email: result.user.email,
        img:result.user.photoURL
      }).then((res)=>{
        dispatch(loginSuccess(res.data))
      })
    }).catch((error)=>{
      dispatch(loginFailure());
    });
  }
  
  return (
    <Container>
        <Wrapper>
            <Title> Sign In</Title>
            <SubTitle> To continue</SubTitle>
            <Input placeholder='Username' onChange={e=>setName(e.target.value)}/>
            <Input placeholder='Password' type="password" onChange={e=>setPassword(e.target.value)}/>
            <Button onClick={handleLogin}>Sign in</Button>
            <Title>or</Title>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            <Title>or</Title>
            <Input placeholder='Username' onChange={e=>setName(e.target.value)}/>
            <Input placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
            <Input placeholder='Password' type="password" onChange={e=>setPassword(e.target.value)}/>
            <Button onClick={handleRegister}>Sign up</Button>
        </Wrapper>
    </Container>
  )
}
