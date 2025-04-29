"use client";
import React, { useState, useEffect } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { authThunks } from "@/store/slice/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { unAuthRoute } from "@/components/withAuth";
import { useRouter } from "next/navigation";

const page = () => {
	const dispatch = useAppDispatch();

	const [userLog, setUserLog] = useState({ email: "", password: "" });
	const [isError, setIsError] = useState<boolean>(false);
	const { loading, data, error, success } = useAppSelector(
		(state) => state.login
	);

	const router = useRouter();
	useEffect(() => {
		if (error !== null) {
			setIsError(true);
			setTimeout(() => {
				clearError();
			}, 3000);
		}

		if (success) {
			router.push("/dashboard/user-checklist");
		}
	}, [error, success]);

	const clearError = () => {
		setIsError(false);
	};
	const login = () => {
		dispatch(authThunks.login(userLog));
	};

	const setChange = (data: { email?: string; password?: string }) => {
		setUserLog({ ...userLog, ...data });
	};
	return (
		<>
			<Box
				display="flex"
				flexDirection="column"
				width="55vh"
				justifySelf="center"
			>
				<Box display="flex" justifyContent="center" py={6}>
					<Image
						src="/images/codev-logo.png"
						alt="codev-logo"
						width={200}
						height={50}
					/>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					gap={2}
					p={4}
					borderRadius={4}
					bgcolor="#fff"
					boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
				>
					<Typography variant="h4" textAlign="center" pb={2}>
						Onboarding Portal
					</Typography>

					<TextField
						name="username"
						type="email"
						placeholder="Username"
						value={userLog.email}
						onChange={(e) => setChange({ email: e.target.value })}
					/>
					<TextField
						name="password"
						type="password"
						placeholder="Password"
						value={userLog.password}
						onChange={(e) => setChange({ password: e.target.value })}
					/>
					<Button
						variant="contained"
						sx={{ borderRadius: 2, bgcolor: "#65BCF2", "&:hover": { bgcolor: "#54A9DD" } }}
						onClick={() => login()}
					>
						Log In
					</Button>
					{isError && (
						<Alert severity="error" sx={{ my: 2 }}>
							{error}
						</Alert>
					)}
				</Box>
			</Box>
		</>
	);
};

export default unAuthRoute(page);
