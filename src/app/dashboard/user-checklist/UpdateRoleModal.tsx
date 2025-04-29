import FormField from '@/components/FormField';
import ModalComponent from '@/components/shared/Modal';
import React from 'react';

type Props = {
	openModal: boolean;
	handleClose: () => void;
};

const UpdateRoleModal = ({ openModal, handleClose }: Props) => {
	return (
		<ModalComponent
			modalTitle='Update Role'
			modalId='update-role-modal'
			handleClose={handleClose}
			open={openModal}
		>
			<FormField placeholder='John Doe' />
			<FormField placeholder='*****' />
			<FormField placeholder='Developer' />
		</ModalComponent>
	);
};

export default UpdateRoleModal;
