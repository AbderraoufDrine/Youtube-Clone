import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from'axios'


const Container = styled.div`
     width: ${(props)=> props.type !== "small" && "360px"};
     cursor: pointer;
     margin-bottom: ${(props)=> props.type === "small" ? "10px" : "45px"};
     display: ${(props)=> props.type === "small" && "flex"};
     gap: 10px;
`
const Image = styled.img`
     width: 100%;
     height: ${(props)=> props.type === "small" ? "120px" : "200px"};
     background-color: #999;
`
const Details = styled.div`
     display: flex;
     margin-top: ${(props)=> props.type !== "small" && "16px"};
     gap: 12px;
`
const ChannelImage = styled.img`
     width: 36px;
     height: 36px;
     border-radius: 50%;
     background-color: #999;
     display: ${(props)=> props.type === "small" && "none"};

`
const Para = styled.div``
const Title = styled.h1`
     font-size: 16px;
     font-weight: 500;
`
const Channel = styled.h2`
     font-size: 14px;
     margin: 10px 0px;
` 
const Info = styled.div`
     font-size:14px;
     color: grey;
`

export default function Card({type, video}) {
     const [channel,setChannel] = useState({});

     useEffect(()=>{
       const fetchChannel = async()=>{
         const res = await axios.get(`/users/find/${video.userId}`)
         setChannel(res.data)
       }
       fetchChannel()
     },[video.userId])
   
  return (
     <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
    <Container type={type} >
        <Image type={type} src={video.imgUrl}/>
        <Details type={type}>
        <ChannelImage type={type} src={channel.img}/>
            <Para>
                <Title>
                {video.title}
                </Title>
                <Channel>{channel.name}</Channel>
                <Info>{video.views} views . {video.createdAt}</Info>
            </Para>
        </Details>
    </Container>
    </Link>
  )
}
