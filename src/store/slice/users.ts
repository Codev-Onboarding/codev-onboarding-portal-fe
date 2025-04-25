import { createApiThunk, sliceCreate } from "../hooks";

const initialState = {
	data: {},
	loading: false,
	success: false,
	error: null,
};

export const getUsers = createApiThunk<
	any,
	{
		role?: string | null;
		page?: number;
		limit?: number;
		filter?: string | null;
		sort?: string | null;
	}
>("users/get-all-users", "users/get-all-users", "GET");

export const getUsersSlice = sliceCreate(
	"get-all-users",
	initialState,
	getUsers
).reducer;

export const userReducers = {
	getUsers: getUsersSlice,
};

export const userThunks = {
	getUsers,
};
