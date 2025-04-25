import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "./rootReducer";
import type { AppDispatch } from "./store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/axios";

export const sliceCreate = (name: string, initialState: any, action: any) =>
	createSlice({
		name: name,
		initialState,
		reducers: {},
		extraReducers: (builder) => {
			builder
				.addCase(action.pending, (state) => {
					state.loading = true;
					state.error = null;
				})
				.addCase(action.fulfilled, (state, action) => {
					state.loading = false;
					state.success = true;
					state.data = action.payload;
				})
				.addCase(action.rejected, (state, action) => {
					state.loading = false;
					state.success = false;
					state.error = action.payload as string;
				});
		},
	});

export const createApiThunk = <ResponseType, PayloadType = void>(
	type: string,
	endpoint: string,
	method: "GET" | "POST" | "PUT" | "DELETE" = "GET"
) =>
	createAsyncThunk<ResponseType, PayloadType>(
		type,
		async (payload, { rejectWithValue }) => {
			try {
				const res = await api.request<ResponseType>({
					url: endpoint,
					method,
					...(payload && { data: payload }),
				});
				return res.data;
			} catch (err: any) {
				return rejectWithValue(err.response?.data?.message || err.message);
			}
		}
	);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
