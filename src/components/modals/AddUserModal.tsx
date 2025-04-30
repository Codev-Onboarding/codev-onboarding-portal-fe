import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddUserFormData,
  addUserFormSchema,
} from "@/utils/schemas/addUserFormSchema";
import { useAppDispatch } from "@/store/hooks";
import { userThunks } from "@/store/slice/users";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  loading: boolean;
}

const UserFormModal: React.FC<ModalProps> = ({ open, onClose, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddUserFormData>({
    mode: "onTouched",
    resolver: zodResolver(addUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
    },
  });
  const dispatch = useAppDispatch();

  const handleFormSubmit = (data: AddUserFormData) => {
    dispatch(userThunks.adminAddUser(data));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} id="user-form">
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Role"
            fullWidth
            margin="normal"
            {...register("role")}
            error={!!errors.role}
            helperText={errors.role?.message}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          type="submit"
          form="user-form"
          variant="contained"
          loading={loading}
          disabled={loading}
          loadingPosition="start"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserFormModal;
