import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  useTheme,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import React from 'react';

export default function Mail() {
  const theme = useTheme();
  const iconStyle = { color: theme.palette.secondary.contrastText };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <MailOutlineIcon style={iconStyle} />
      </IconButton>
      <Dialog open={open} onClose={handleClose} className="textCenter">
        <DialogTitle>Send me an Email</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your Name"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Your Email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Subject"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Message"
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
