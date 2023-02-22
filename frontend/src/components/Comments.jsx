import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  color: black;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
const Button = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export default function Comments({videoId}) {

  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);


  const handleAddComment = async(e)=>{
    try {
      const res = await axios.post("https://youtubeclonebackend.herokuapp.com/comments",
      {
        userId: currentUser._id,
        videoId: videoId,
        desc: comment
      }
      )

    } catch (error) {
      
    }
  }
  useEffect(()=>{
    const fetchComments = async() =>{
      try {
        const res = await axios.get(`/comments/${videoId}`)
        setComments(res.data)
      } catch (error) {
        
      }
    }
    fetchComments()
  },[videoId])
  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img}/>
        <Input placeholder="Add a comment..." onChange={(e)=> setComment(e.target.value)}/>
        <Button onClick={handleAddComment}>Post</Button>
      </NewComment>
      {comments.map(comment =>(
        <Comment comment = {comment} key ={comment._id}/>
      ))}
    </Container>  )
}
