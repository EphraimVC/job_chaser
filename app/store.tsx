import { configureStore } from "@reduxjs/toolkit";
import filterJobs from "./StoreSlice";
import inputValue from "./InputSlice";

export const store = configureStore({
    reducer: {
        filteredJobs: filterJobs,
        inputFilterText: inputValue,
    },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
