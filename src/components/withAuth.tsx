"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { authThunks } from "@/store/slice/auth";

type Mode = "protected" | "guest";

export const useAuthValidation = (mode: Mode, redirectPath: string) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { success, error, loading } = useAppSelector(
		(state) => state.validateToken
	);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			dispatch(authThunks.validateToken({ token })).finally(() =>
				setChecked(true)
			);
		} else {
			setChecked(true);
			if (mode === "protected") {
				router.push("/login");
			}
		}
	}, [dispatch]);

	useEffect(() => {
		if (mode === "protected" && error) {
			localStorage.removeItem("token");
			router.push("/login");
		}

		if (mode === "guest" && success) {
			router.push(redirectPath);
		}
	}, [error, success]);

	return { checked, loading };
};

export const withAuth = (WrappedComponent: React.FC) => {
	return function AuthenticatedComponent(props: any) {
		const { checked, loading } = useAuthValidation("protected", "/login");

		if (!checked || loading) {
			return <p>Loading...</p>;
		}

		return <WrappedComponent {...props} />;
	};
};

export const unAuthRoute = (WrappedComponent: React.FC) => {
	return function UnauthenticatedComponent(props: any) {
		const { checked, loading } = useAuthValidation(
			"guest",
			"/dashboard/user-checklist"
		);

		if (!checked || loading) {
			return <p>Checking credentials...</p>;
		}

		return <WrappedComponent {...props} />;
	};
};
