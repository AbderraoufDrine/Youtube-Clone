import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Card from '../components/Card';

const Conatianer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
`

export default function Search() {
    const [videos,setVideos] = useState([]);
    const query = useLocation().search

    useEffect(()=>{
        const fetchVideos = async()=>{
            const res = await axios.get(`/videos/search${query}`)
            setVideos(res.data);
        }
        fetchVideos();
    },[query])
  return (
    <Conatianer>
        {videos.map(video=>(
            <Card key = {video._id} video={video}/>
        ))}
    </Conatianer>
  )
}
