import React from "react";
import postDataService from "../../services/post.services";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Divider,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditPost from "../Editpost/EditPost";

export default function PostCard({ singlePost }) {
  const handleDelete = async (id) => {
    await postDataService.deletePost(id);
  };
  return (
    <Card sx={{ width: 345, height: 375 }}>
      <CardMedia
        component="img"
        height="194"
        image={singlePost.picture}
        alt={singlePost.title}
      />
      <CardContent
        sx={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" color="text.secondary">
          {singlePost.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {singlePost.desc.length > 200
            ? singlePost.desc.slice(0, 200) + "...."
            : singlePost.desc}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          bgcolor: "lightgray",
        }}
      >
        <Divider />
        <Button
          variant="outlined"
          aria-label="delete"
          onClick={() => handleDelete(singlePost.id)}
        >
          <DeleteIcon color="error" />
        </Button>
        <EditPost />
      </CardActions>
    </Card>
  );
}
