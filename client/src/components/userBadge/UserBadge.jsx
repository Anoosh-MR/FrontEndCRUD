import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import { Avatar, MenuItem } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "center",
};

export const UserBadge = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MenuItem onClick={handleOpen}>
        <Typography textAlign="center">Profile</Typography>
      </MenuItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {user && (
              <>
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {user.displayName}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {user.email}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
