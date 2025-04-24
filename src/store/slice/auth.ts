import { createApiThunk, sliceCreate } from "../hooks";

const initialState = {
	data: {},
	loading: false,
	success: false,
	error: null,
};

export const validateToken = createApiThunk<any, { token: string }>(
	"auth/validateToken",
	"auth/validateToken",
	"GET"
);

export const login = createApiThunk<any, { email: string; password: string }>(
	"auth/login",
	"auth/login",
	"POST"
);

export const register = createApiThunk<any, any>(
	"auth/register",
	"/register",
	"POST"
);

export const resetPassword = createApiThunk<any, { email: string }>(
	"auth/resetPassword",
	"/reset-password",
	"POST"
);

export const validateTokenSlice = sliceCreate(
	"validateToken",
	initialState,
	validateToken
).reducer;
export const loginSlice = sliceCreate("login", initialState, login).reducer;
export const registerSlice = sliceCreate(
	"register",
	initialState,
	register
).reducer;
export const resetPasswordSlice = sliceCreate(
	"resetPassword",
	initialState,
	resetPassword
).reducer;

export const authReducers = {
	validateToken: validateTokenSlice,
	login: loginSlice,
	register: registerSlice,
	resetPassword: resetPasswordSlice,
};

export const authThunks = {
	login,
	register,
	resetPassword,
	validateToken,
};
