import { createApiThunk, sliceCreate } from "../hooks";

const initialState = {
	data: {},
	loading: false,
	success: false,
	error: null,
};

export const getUserTasks = createApiThunk<any, any>(
	"tasks/user-tasks",
	(data) => `tasks/user/${data.userId}`,
	"GET"
);

export const getTask = createApiThunk<any, any>(
	"tasks/taskDetails",
	(data) => `tasks/${data.taskId}`,
	"GET"
);

export const completeTask = createApiThunk<any, any>(
	"tasks/complete-task",
	(data) => `tasks/complete-task/${data.taskId}`,
	"POST"
);

export const approveTask = createApiThunk<any, any>(
	"tasks/approve-task",
	(data) => `tasks/approve-task/${data.taskId}`,
	"POST"
);

export const incompleteTask = createApiThunk<any, any>(
	"tasks/incomplete-task",
	(data) => `tasks/incomplete-task/${data.taskId}`,
	"POST"
);

export const getTaskByChecklist = createApiThunk<any, any>(
	"tasks/checklist",
	(data) => `tasks/checklist/${data.checkListType}`,
	"POST"
);

export const getAllTasks = createApiThunk<any, any>(
	"tasks/get-tasks",
	"",
	"GET"
);

export const getUserTasksSlice = sliceCreate(
	"tasks/user-tasks",
	initialState,
	getUserTasks
).reducer;

export const getTaskSlice = sliceCreate(
	"tasks/task-details",
	initialState,
	getTask
).reducer;

export const completeTaskSlice = sliceCreate(
	"tasks/complete-task",
	initialState,
	completeTask
).reducer;

export const approveTaskSlice = sliceCreate(
	"tasks/approve-task",
	initialState,
	approveTask
).reducer;
export const incompleteTaskSlice = sliceCreate(
	"tasks/incomplete-task",
	initialState,
	incompleteTask
).reducer;
export const getTaskByChecklistSlice = sliceCreate(
	"tasks/checklist",
	initialState,
	getTaskByChecklist
).reducer;

export const getAllTasksSlice = sliceCreate(
	"tasks/get-tasks",
	initialState,
	getAllTasks
).reducer;

export const taskReducers = {
	getUserTasks: getUserTasksSlice,
	getTask: getTaskSlice,
	completeTask: completeTaskSlice,
	approveTask: approveTaskSlice,
	incompleteTask: incompleteTaskSlice,
	getTaskByChecklist: getTaskByChecklistSlice,
	getAllTasks: getAllTasksSlice,
};

export const taskThunks = {
	getUserTasks,
	getTask,
	completeTask,
	incompleteTask,
	approveTask,
	getTaskByChecklist,
	getAllTasks,
};
