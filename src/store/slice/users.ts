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

export const adminAddUser = createApiThunk<
	any,
	{
		role: string;
		name: string;
		email: string;
	}
>("users/admin-user-create", "users/admin-user-create", "POST");

export const adminUpdateUser = createApiThunk<
	any,
	{
		role?: string;
		name?: string;
		email?: string;
		password?: string;
		userId?: string;
	}
>(
	"users/admin-user-update",
	(data) => `users/admin-user-update/${data.userId}`,
	"POST"
);

export const getUsersSlice = sliceCreate(
	"get-all-users",
	initialState,
	getUsers
).reducer;

export const adminAddUserSlice = sliceCreate(
	"admin-add-user",
	initialState,
	adminAddUser
).reducer;

export const adminUpdateUserSlice = sliceCreate(
	"admin-update-user",
	initialState,
	adminAddUser
).reducer;

export const userReducers = {
	getUsers: getUsersSlice,
	adminAddUser: adminAddUserSlice,
	adminUpdateUser: adminUpdateUserSlice,
};

export const userThunks = {
	getUsers,
	adminAddUser,
	adminUpdateUser,
};
