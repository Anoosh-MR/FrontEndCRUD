import React from "react";
import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Fab,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { UserAuth } from "../../context/AuthContext";
import postDataService from "../../services/post.services";
import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [file, setfile] = useState();
  const [progress, setProgress] = useState();
  const { user, setFetchAgain, fetchagain } = UserAuth();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    if (!title || !desc) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now()}${file.name}`);

    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const newPost = {
            title,
            desc,
            picture: url,
            owner: user.uid,
            createdAt: Timestamp.now().toDate(),
          };

          postDataService.addPost(newPost);
          toast.success("Post add successfully!");
          setOpen(false);
          setFetchAgain(!fetchagain);
          setfile("");
          setDesc("");
          setTitle("");
          setProgress("");
        });
      }
    );
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {!open && (
        <Fab
          onClick={handleOpen}
          variant="extended"
          color="secondary"
          aria-label="edit"
          sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(5),
            right: (theme) => theme.spacing(5),
          }}
        >
          <AddIcon />
          Post
        </Fab>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {progress ? (
            <CircularProgress
              size="100"
              variant="determinate"
              value={progress}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                flexDirection: "Column",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Post
              </Typography>
              {file ? (
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  width="100"
                  image={file && URL.createObjectURL(file)}
                />
              ) : (
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => setfile(e.target.files[0])}
                  />
                  <AddPhotoAlternateIcon />
                </IconButton>
              )}

              <TextField
                id="filled-basic"
                label="Title"
                variant="filled"
                sx={{ m: 1, width: "40ch" }}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Descripton"
                variant="filled"
                multiline
                rows={5}
                sx={{ m: 1, width: "40ch" }}
                onChange={(e) => setDesc(e.target.value)}
              />

              <Button onClick={handleSubmit} variant="outlined">
                Create
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CreatePost;
