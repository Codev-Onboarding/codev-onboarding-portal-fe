"use client";

import React from "react";
import { Box, Chip, LinearProgress, Typography } from "@mui/material";

import { withAuth } from "@/components/withAuth";

const page = () => {
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress === 100) {
					return 0;
				}
				const diff = Math.random() * 10;
				return Math.min(oldProgress + diff, 100);
			});
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Box display="flex" pt="110px" height="100vh">
			{/* <Box width={200} bgcolor="#FFEFEF" /> */}
			<Box display="flex" flexDirection="column" flexGrow={1} pt={4}>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					gap={1}
					bgcolor="#fff"
					boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
					mx={4}
					px={10}
				>
					<Typography variant="body1" py={2}>
						50%
					</Typography>
					<Box sx={{ width: "100%" }}>
						<LinearProgress
							variant="determinate"
							value={progress}
							sx={{
								bgcolor: "#FFEEEE",
								"& .MuiLinearProgress-bar": {
									bgcolor: "#FE9696",
								},
							}}
						/>
					</Box>
					<Typography variant="body2" py={1}>
						You are 50% finished with your task.
					</Typography>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					gap={6}
					bgcolor="#fff"
					boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
					m={4}
					p={4}
				>
					<Box display="flex" flexDirection="column">
						<Box
							display="flex"
							justifyContent="space-between"
							py={1}
							mb={1}
							sx={{ borderBottom: "1px solid #ddd" }}
						>
							<Typography variant="h6" width={200}>
								Status
							</Typography>
							<Typography variant="h6" width={400} textAlign="center">
								Description
							</Typography>
							<Typography variant="h6" width={200} textAlign="center">
								Deadline
							</Typography>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							py={1}
							sx={{ borderBottom: "1px solid #ddd" }}
						>
							<Chip label="Not Started" color="default" />
							<Typography variant="body1" width={400} textAlign="center">
								This is the first description.
							</Typography>
							<Typography variant="body1" width={200} textAlign="center">
								01.01.2025
							</Typography>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							py={1}
							sx={{ borderBottom: "1px solid #ddd" }}
						>
							<Chip label="In Progress" sx={{ bgcolor: "#FED4BB" }} />
							<Typography variant="body1" width={400} textAlign="center">
								This is the second description.
							</Typography>
							<Typography variant="body1" width={200} textAlign="center">
								01.01.2025
							</Typography>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							py={1}
							sx={{ borderBottom: "1px solid #ddd" }}
						>
							<Chip label="Completed" sx={{ bgcolor: "#FEBBBB" }} />
							<Typography variant="body1" width={400} textAlign="center">
								This is the third description.
							</Typography>
							<Typography variant="body1" width={200} textAlign="center">
								01.01.2025
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default withAuth(page);
