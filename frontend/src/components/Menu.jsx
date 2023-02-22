import React from 'react'
import styled from 'styled-components'
import logo from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Container = styled.div`
   flex: 1;
   background-color: #202020;
   height: 100vh;
   color: white;
   font-size:14px;
   position: sticky;
   top: 0;
   
`
const Wrapper = styled.div`
   padding: 18px 26px;   
`

const Logo = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   font-weight: bold;
   margin-bottom: 10px
`
const Img = styled.img`
   height: 25px;
`

const Item = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   cursor: pointer;
   padding: 7.5px 0px;

   &:hover{
    background-color: grey;
   }

`
const Line = styled.hr`
   margin: 15px 0px;
   border: 0.5px solid #373733;
`

const Login = styled.div`
  
`
const Button = styled.button`
   padding: 5px 15px;
   background-color: transparent;
   border: 1px solid #3ea6ff;
   color: #3ea6ff;
   border-radius: 3px;
   font-weight: 500;
   margin-top: 10px;
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 5px;
`
export default function Menu() {

  const {currentUser} = useSelector(state=> state.user)

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Logo>
          <Img src={logo}/>
          Youtube
        </Logo>
        </Link>
        <Item>
        <HomeIcon/>
          Home
        </Item>
        <Link to="trends" style={{textDecoration: "none", color:"inherit"}}>
        <Item>
        <ExploreIcon/>
          Explore
        </Item>
        </Link>
        <Link to="subscriptions" style={{textDecoration: "none", color:"inherit"}}>
        <Item>
        <SubscriptionsIcon/>
          Subscriptions
        </Item>
        </Link>
        <Line/>
        <Item>
        <VideoLibraryIcon/>
          Library
        </Item>
        <Item>
        <HistoryIcon/>
          History
        </Item>
        { !currentUser &&
          <>
        <Line/>
          <Login>
          Sign in to like, comment & subscribe 
          <br/>
          <Link to="signin" style={{textDecoration: "none"}}>
          <Button><AccountCircleIcon/>Sign Up</Button>
          </Link>
        </Login>
        <Line/>
        </>}
        <Item>
        <LibraryMusicIcon/>
          Music
        </Item>
        <Item>
        <SportsBasketballIcon/>
          Sports
        </Item>
        <Item>
        <SportsEsportsIcon/>
          Gaming
        </Item>
        <Item>
        <MovieCreationIcon/>
          Movies
        </Item>
        <Item>
        <ArticleIcon/>
          News
        </Item>
        <Item>
        <LiveTvIcon/>
          Live
        </Item>
        <Line/>
        <Item>
        <SettingsIcon/>
          Settings
        </Item>
        <Item>
        <FlagIcon/>
          Report
        </Item>
        <Item>
        <HelpIcon/>
          Help
        </Item>
      </Wrapper>
    </Container>
  )
}
