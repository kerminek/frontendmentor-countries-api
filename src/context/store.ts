import { createContext } from "react";

const initialState: any = [];

export type initialStateType = typeof initialState;

const context = createContext<initialStateType>(initialState);

export default context;
