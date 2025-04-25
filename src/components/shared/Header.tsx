import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = () => {
	return (
		<Box position="fixed" width="100%">
			<Box display="flex" height={50}>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					bgcolor="#CF1E1E"
					width={200}
				>
					<Typography variant="h4" color="#fff" height="auto">
						Codev
					</Typography>
				</Box>
				<Box display="flex" alignItems="center" flexGrow={1} bgcolor="#FF3636">
					<Button variant="text">
						<Menu htmlColor="#fff" />
					</Button>
				</Box>
			</Box>
			<Box display="flex" height={60}>
				<Box
					display="flex"
					gap={1}
					alignItems="center"
					justifyContent="center"
					bgcolor="green"
					width={200}
				>
					<Box bgcolor="#fff" height={40} width={40} borderRadius="50%" />
					<Typography variant="body1" color="#fff" height="auto">
						My Profile
					</Typography>
				</Box>
				<Box
					display="flex"
					alignItems="center"
					flexGrow={1}
					bgcolor="#FFEFEF"
					height="100%"
				>
					<Typography variant="body1" color="black" height="auto" px={2}>
						Codev Onboarding
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
