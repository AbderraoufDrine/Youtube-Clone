import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import {useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Upload from './Upload';
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux'
const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: #202020;
    height: 56px;
    z-index:999;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
    justify-content: flex-end;
    position: relative;
`
const Search = styled.div`
    position: absolute;
    width: 40%;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius:3px;
    border: 1px solid #ccc;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    color: white;
    width: 95%;
    width: 100%;
    &:focus {
      outline: none;
    }
`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight:500;
    color: white;
`
const Avatar = styled.img`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   background-color:#999;
`
const Logout = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export default function Navabr() {

  const [open,setOpen] = useState(false)
  const {currentUser} = useSelector(state=> state.user)
  const [query,setQuery] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleLogOut = ()=>{
    dispatch(logout())

  }
  return (
    <>
    <Container>
      <Wrapper>
        <Search>
        <Input placeholder='Search' onChange={(e)=> setQuery(e.target.value)}/>
        <SearchIcon color="primary" onClick={()=> navigate(`/serach?query=${query}`)}/>
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon onClick={()=> setOpen(true)}/>
            <Avatar src={currentUser.img}/>
            {currentUser.name}
            <Logout onClick={handleLogOut}>Logout</Logout>
          </User>
        ) : <Link to="signin" style = {{textDecoration: "none"}}>
        <Button><AccountCircleIcon/>Sign Up</Button>
        </Link>}
      </Wrapper>
    </Container>
    {open && <Upload setOpen={setOpen}/>}
    </>

  )
}
