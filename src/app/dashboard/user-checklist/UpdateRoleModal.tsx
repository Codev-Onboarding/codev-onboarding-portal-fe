import FormField from '@/components/FormField';
import ModalComponent from '@/components/shared/Modal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetAdminUpdateUser, userThunks } from '@/store/slice/users';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

type Props = {
	openModal: boolean;
	handleClose: () => void;
	user: any;
	getUsers: () => void;
};

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	marginY: 2,
};

const UpdateRoleModal = ({ openModal, handleClose, user, getUsers }: Props) => {
	const [userLog, setUserLog] = useState({
		name: user.name,
		email: user.email,
		role: user.role,
		password: user.password,
		userId: user._id,
	});

	const dispatch = useAppDispatch();

	const { loading, success, error } = useAppSelector(
		(state: any) => state.adminUpdateUser
	);

	const updateUser = () => {
		dispatch(userThunks.adminUpdateUser(userLog));
	};

	const setChange = (data: {
		email?: string;
		password?: string;
		role?: string;
		name?: string;
	}) => {
		setUserLog({ ...userLog, ...data });
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
			modalTitle='Update Role'
			modalId='update-role-modal'
			handleClose={handleModalClose}
			open={openModal}
			confirmButtonLabel='Send invite link'
			onConfirmClick={updateUser}
			loading={loading}
		>
			<Box sx={containerStyle}>
				<FormField
					placeholder={user.name}
					variant='standard'
					onChange={(e) => setChange({ name: e.target.value })}
				/>
				<FormField
					placeholder={user.email}
					variant='standard'
					onChange={(e) => setChange({ email: e.target.value })}
				/>
				<FormField
					placeholder='********'
					variant='standard'
					type='password'
					onChange={(e) => setChange({ password: e.target.value })}
				/>
				<FormField
					placeholder={user.role}
					variant='standard'
					onChange={(e) => setChange({ role: e.target.value })}
				/>
			</Box>
		</ModalComponent>
	);
};

export default UpdateRoleModal;
