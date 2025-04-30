"use client";
import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Check, Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { unAuthRoute, withAuth } from "@/components/withAuth";
import { useRouter } from "next/navigation";
import { userThunks } from "@/store/slice/users";
import AddUserModal from "@/components/modals/AddUserModal";
import SnackbarSuccess from "@/components/snackbar/SnackbarSuccess";
import SnackbarError from "@/components/snackbar/SnackbarError";

const page = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const {
    loading,
    data: usersList,
    error,
    success,
  } = useAppSelector((state) => state.getUsers);

  const {
    loading: addUserLoading,
    error: addUserError,
    success: addUserSuccess,
  } = useAppSelector((state) => state.adminAddUser);

  useEffect(() => {
    console.log("USerData", usersList);
  }, [usersList]);

  const users: any[] = usersList?.users || [];
  const [query, setQuery] = useState<{
    role?: string | null;
    page?: number;
    limit?: number;
    filter?: string | null;
    sort?: string | null;
  }>({
    role: null,
    page: 1,
    limit: 10,
    filter: null,
    sort: null,
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    dispatch(userThunks.getUsers(query));
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenSnackbar = () => setOpenSnackbar(true);
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    // Reset form state here if needed
  };
  useEffect(() => {
    if (addUserSuccess) {
      handleOpenSnackbar();
      handleClose(); // optionally close the modal after success
      getUsers(); // refresh the user list
    }
    if (addUserError) {
      handleOpenSnackbar();
    }
  }, [addUserSuccess, addUserError]);

  const snackbarDisplay = () => {
    if (addUserSuccess) {
      return (
        <SnackbarSuccess
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          message="User added successfully"
        />
      );
    }
    if (addUserError) {
      return (
        <SnackbarError
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          message={addUserError}
        />
      );
    }
    return null;
  };
  return (
    <Box display="flex" pt="110px" height="100vh">
      {/* <Box width={200} bgcolor="#FFEFEF" /> */}
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Box
          display="flex"
          flexDirection="column"
          gap={6}
          bgcolor="#fff"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          m={4}
          p={4}
        >
          <Box display="flex" justifyContent="space-between">
            <Button variant="contained" onClick={handleOpen}>
              Add User
            </Button>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography>Search:</Typography>
              <TextField
                variant="standard"
                type="text"
                name="search"
                placeholder="Enter keyword..."
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              justifyContent="space-between"
              py={2}
              sx={{ borderBottom: "1px solid #ddd" }}
            >
              <Typography variant="body1" width={200}>
                Name
              </Typography>
              <Typography variant="body1" width={200}>
                Email
              </Typography>
              <Typography variant="body1" width={300} textAlign="center">
                Task
              </Typography>
              <Typography variant="body1" width={300} textAlign="center">
                Action
              </Typography>
            </Box>
            {users?.length ? (
              <>
                {users.map((user: any) => {
                  return (
                    <Box
                      key={user._id}
                      display="flex"
                      justifyContent="space-between"
                      py={1}
                      sx={{ borderBottom: "1px solid #ddd" }}
                    >
                      <Typography variant="body1" width={200}>
                        {user.name || "John Doe"}
                      </Typography>
                      <Typography variant="body1" width={200}>
                        {user.email || "johndoe@mail.com"}
                      </Typography>
                      <Box
                        display="flex"
                        gap={2}
                        width={300}
                        justifyContent="center"
                      >
                        <Button variant="contained" color="success">
                          Update Role
                        </Button>
                        <Button variant="contained" color="error">
                          Disable
                        </Button>
                      </Box>
                      <Box
                        display="flex"
                        gap={2}
                        width={300}
                        justifyContent="center"
                      >
                        <Button variant="contained" color="success">
                          <Check />
                        </Button>
                        <Button variant="contained" color="error">
                          <Delete />
                        </Button>
                      </Box>
                    </Box>
                  );
                })}
              </>
            ) : null}
          </Box>
          {open && (
            <AddUserModal
              open={open}
              onClose={handleClose}
              loading={addUserLoading}
            />
          )}
          {openSnackbar && snackbarDisplay()}
        </Box>
      </Box>
    </Box>
  );
};

export default withAuth(page);
