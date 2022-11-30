import React from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Edit from "@mui/icons-material/Edit";

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

const EditPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {!open && (
        <Button variant="outlined" onClick={handleOpen} aria-label="edit">
          <Edit color="primary" />
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              Edit Post
            </Typography>

            <TextField
              id="filled-basic"
              label="Title"
              variant="filled"
              sx={{ m: 1, width: "40ch" }}
            />
            <TextField
              id="filled-basic"
              label="Descripton"
              variant="filled"
              multiline
              rows={5}
              sx={{ m: 1, width: "40ch" }}
            />
            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditPost;
