import FormField from "@/components/FormField";
import ModalComponent from "@/components/shared/Modal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetAdminUpdateUser, userThunks } from "@/store/slice/users";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {
  openModal: boolean;
  handleClose: () => void;
  user: any;
  getUsers: () => void;
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginY: 2,
};

const DisableUserModal = ({
  openModal,
  handleClose,
  user,
  getUsers,
}: Props) => {
  const [userLog, setUserLog] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
    password: user.password,
    userId: user._id,
    enabled: false,
  });

  const dispatch = useAppDispatch();

  const { loading, success, error } = useAppSelector(
    (state: any) => state.adminUpdateUser
  );

  const updateUser = () => {
    dispatch(userThunks.adminUpdateUser(userLog));
  };

  const handleModalClose = () => {
    dispatch(resetAdminUpdateUser());
    handleClose();
  };

  const onSuccessUpdate = () => {
    handleModalClose();
    getUsers();
  };

  useEffect(() => {
    if (success) {
      onSuccessUpdate();
    }
  }, [success]);

  return (
    <ModalComponent
      modalTitle="Disable User"
      modalId="disable-user-modal"
      handleClose={handleModalClose}
      open={openModal}
      confirmButtonLabel="Yes, Disable"
      onConfirmClick={updateUser}
      loading={loading}
    >
      <p>Are you sure you want to disable {user.email}?</p>
    </ModalComponent>
  );
};

export default DisableUserModal;
