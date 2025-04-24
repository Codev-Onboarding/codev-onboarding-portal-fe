import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./slice/auth";

export const rootReducer = combineReducers({
	...authReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
