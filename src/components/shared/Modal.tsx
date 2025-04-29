import { Box, Typography, Modal } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
	open: boolean;
	handleClose: () => void;
	children: React.ReactNode;
	modalTitle: string;
	modalId: string;
	style?: CSSProperties;
};

const ModalComponent = ({
	open,
	handleClose,
	modalTitle,
	modalId,
	children,
	style,
}: Props) => {
	return (
		<Modal open={open} onClose={handleClose} id={modalId}>
			<Box sx={style}>
				<Typography id={modalId} variant='h6' component='h2'>
					{modalTitle}
				</Typography>
				{children}
			</Box>
		</Modal>
	);
};

export default ModalComponent;
