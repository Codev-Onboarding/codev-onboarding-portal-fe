import { Alert, Snackbar } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  message: string;
};

const SnackbarSuccess = ({ open, onClose, message }: Props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
    >
      <Alert
        onClose={onClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
export default SnackbarSuccess;
