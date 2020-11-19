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
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://v9fq8p6ad9.execute-api.us-west-2.amazonaws.com/';

export default function Mail() {
  const theme = useTheme();
  const iconStyle = { color: theme.palette.secondary.contrastText };
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const resetForm = () => {
    setEmail('');
    setMessage('');
    setName('');
    setSubject('');
  };

  const handleSend = async () => {
    if (!name || !email || !subject || !message) {
      window.alert('Please fill out all fields');
      return;
    }
    try {
      resetForm();
      const data = {
        name, email, subject, message,
      };
      const headers = { 'content-type': 'application/json' };

      const response = await axios.post(BASE_URL, data, { headers });
      console.log(response);
      setOpen(false);
    } catch (error) {
      console.error(error);
      setOpen(false);
    }
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <MailOutlineIcon style={iconStyle} />
      </IconButton>
      <Dialog open={open} onClose={handleClose} className="textCenter">
        <DialogTitle>Send me an email</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={({ target }) => setName(target.value)}
            autoFocus
            margin="dense"
            label="Your Name"
          />
          <TextField
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            autoFocus
            margin="dense"
            label="Your Email"
            fullWidth
          />
          <TextField
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
            autoFocus
            margin="dense"
            label="Subject"
            fullWidth
          />
          <TextField
            value={message}
            onChange={({ target }) => setMessage(target.value)}
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
          <Button onClick={handleSend} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
