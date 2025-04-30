import { Box, Typography, Modal, Button } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
	open: boolean;
	handleClose: () => void;
	children: React.ReactNode;
	modalTitle: string;
	modalId: string;
	confirmButtonLabel: string;
	onConfirmClick: () => void;
	loading: boolean;
};

const modalContentStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: 4,
};

const modalTitleStyle = {
	borderBottom: 1,
	width: '100%',
	paddingY: 4,
	paddingX: 2,
	borderColor: 'gray',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

const actionsContainerStyle = {
	borderTop: 1,
	borderColor: 'gray',
	p: 2,
	display: 'flex',
	flexDirection: 'row',
	gap: 2,
	justifyContent: 'end',
	marginTop: 4,
};

const ModalComponent = ({
	open,
	handleClose,
	modalTitle,
	modalId,
	children,
	confirmButtonLabel,
	onConfirmClick,
	loading,
}: Props) => {
	return (
		<Modal open={open} onClose={handleClose} id={modalId}>
			<Box sx={modalContentStyle}>
				<Box sx={modalTitleStyle}>
					<Typography id={modalId} variant='h6' component='h2'>
						{modalTitle}
					</Typography>
					<Button color='inherit' onClick={handleClose}>
						<CloseIcon />
					</Button>
				</Box>

				<Box sx={{ p: 4 }}>{children}</Box>
				<Box sx={actionsContainerStyle}>
					<Button
						variant='contained'
						color='inherit'
						style={{ borderRadius: 25, fontSize: '12px' }}
						size='small'
						onClick={handleClose}
					>
						Cancel
					</Button>
					<Button
						variant='contained'
						color='error'
						style={{ borderRadius: 25, fontSize: '12px' }}
						size='small'
						onClick={onConfirmClick}
						loading={loading}
					>
						{confirmButtonLabel}
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default ModalComponent;
