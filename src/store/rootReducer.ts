import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./slice/auth";
import { userReducers } from "./slice/users";

export const rootReducer = combineReducers({
	...authReducers,
	...userReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
