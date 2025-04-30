import { combineReducers } from '@reduxjs/toolkit';
import { authReducers } from './slice/auth';
import { userReducers } from './slice/users';
import { taskReducers } from './slice/tasks';

export const rootReducer = combineReducers({
	...authReducers,
	...userReducers,
	...taskReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
