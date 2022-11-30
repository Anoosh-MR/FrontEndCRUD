import React, { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "../../components/navbar/NavBar";
import PostCard from "../../components/postCard/PostCard";
import CreatePost from "../../components/CreatePost/CreatePost";
import postDataService from "../../services/post.services";
const Home = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await postDataService.getAllPost();

    setpost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <>
      <Box>
        <NavBar />
        <CreatePost />
        <Container
          maxWidth="xl"
          sx={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {post.map((singlePost) => (
            <PostCard key={singlePost.createdAt} singlePost={singlePost} />
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Home;
