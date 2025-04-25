"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Check, Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { withAuth } from "@/components/withAuth";
import { useRouter } from "next/navigation";

import { userThunks } from "@/store/slice/users";
const page = () => {
	const dispatch = useAppDispatch();

	const router = useRouter();
	const {
		loading,
		data: usersList,
		error,
		success,
	} = useAppSelector((state) => state.getUsers);

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
						<Button variant="contained">Add User</Button>
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
				</Box>
			</Box>
		</Box>
	);
};

export default withAuth(page);
