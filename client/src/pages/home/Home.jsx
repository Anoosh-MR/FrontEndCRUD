import { Box, Fab } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import NavBar from "../../components/navbar/NavBar";
import PostCard from "../../components/postCard/PostCard";
import CreatePost from "../../components/CreatePost/CreatePost";

const Home = () => {
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
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Container>
      </Box>
    </>
  );
};

export default Home;
